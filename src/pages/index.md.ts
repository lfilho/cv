import type { APIRoute } from 'astro';

const markdown = `# Hi, I'm Luiz

*I like software and people :)*

I'm a people-centric engineering leader scaling teams and orgs across Coursera, AWS, startups, and government. I currently lead Developer Experience and the AI transformation at Coursera, and I mentor engineering leaders through Topmate.

## Explore

- [View my CV](/cv)
- [Download the CV as Markdown](/cv.md)
- [Book a mentoring session](/book-me)
- [Read the blog](/blog)
- [Browse projects](/projects)
- [About me](/about)
- [Contact me](/contact)
- [Privacy policy](/privacy)
`;

export const GET: APIRoute = () => {
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
