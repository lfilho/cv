import type { APIRoute } from 'astro';
import { generateCvMarkdown } from '@lib/cv-to-markdown';

export const GET: APIRoute = () => {
  return new Response(generateCvMarkdown(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
