import type { APIRoute } from 'astro';

const markdown = `# Privacy

This is a personal website. I don't collect personal information through forms, logins, accounts, or cookies.

## Analytics

I use [TinyAnalytics](https://tinyanalytics.io) to understand aggregate, anonymized page-view data. It does not use cookies and does not track you across the web.

## Third-party links

This site links to third-party platforms such as LinkedIn, GitHub, Topmate, and SpeakerDeck. Those services have their own privacy policies and data practices, which apply once you leave this site.

## Hosting

The site is hosted on GitHub Pages. GitHub may collect technical information, such as IP addresses and access logs, as part of providing hosting services. I don't have access to individual visitor logs.

## Changes and questions

If I change how data is handled on this site, I'll update this page. For privacy questions, reach me at [lfilho@gmail.com](mailto:lfilho@gmail.com).
`;

export const GET: APIRoute = () => {
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
