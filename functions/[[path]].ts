interface FunctionContext {
  request: Request;
  env: { ASSETS: { fetch: typeof fetch } };
  next: () => Promise<Response>;
}

const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8';

function isApiPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/') ||
    pathname === '/resume.json' ||
    pathname === '/openapi.json' ||
    pathname.startsWith('/.well-known/')
  );
}

function jsonErrorResponse(status: number, message: string): Response {
  const body = JSON.stringify(
    {
      error: status === 404 ? 'not_found' : 'error',
      message,
      status,
      documentation: 'https://luiz.dev/llms.txt',
      sitemap: 'https://luiz.dev/sitemap-index.xml',
    },
    null,
    2,
  );

  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const onRequest = async (context: FunctionContext): Promise<Response> => {
  const { request, env, next } = context;

  if (request.method !== 'GET') {
    return next();
  }

  const accept = request.headers.get('Accept') || '';
  const url = new URL(request.url);

  // JSON error responses for API-like paths that don't exist.
  if (accept.includes('application/json') && isApiPath(url.pathname)) {
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      return jsonErrorResponse(404, `No API endpoint at ${url.pathname}.`);
    }
    return response;
  }

  if (!accept.includes('text/markdown')) {
    return next();
  }

  // Skip direct requests to static files (CSS, JS, images, .md, PDFs, etc.)
  if (/\.[^/]+$/.test(url.pathname)) {
    return next();
  }

  const pagePath = url.pathname.replace(/\/$/, '') || '/';

  let mdPath: string;
  if (pagePath === '/') {
    mdPath = '/md/index.md';
  } else {
    const slug = pagePath.slice(1);
    mdPath = `/${slug}/md/${slug}.md`;
  }

  const mdUrl = new URL(mdPath, request.url);
  const mdResponse = await env.ASSETS.fetch(new Request(mdUrl, request));

  if (mdResponse.status !== 200) {
    return next();
  }

  const headers = new Headers(mdResponse.headers);
  headers.set('Content-Type', MARKDOWN_CONTENT_TYPE);
  headers.set('Vary', 'Accept, Accept-Encoding');

  return new Response(mdResponse.body, {
    status: 200,
    headers,
  });
};
