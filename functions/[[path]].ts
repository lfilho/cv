interface FunctionContext {
  request: Request;
  env: { ASSETS: { fetch: typeof fetch } };
  next: () => Promise<Response>;
}

const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8';

export const onRequest = async (context: FunctionContext): Promise<Response> => {
  const { request, env, next } = context;

  if (request.method !== 'GET') {
    return next();
  }

  const accept = request.headers.get('Accept') || '';
  if (!accept.includes('text/markdown')) {
    return next();
  }

  const url = new URL(request.url);

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

  return new Response(mdResponse.body, {
    status: 200,
    headers,
  });
};
