import type { APIRoute } from 'astro';

const markdown = `# Book a Mentoring Session

Take your skills to the next level and expand your network.

## Why book a session?

- Personalized guidance tailored to your goals and challenges
- Benefit from 20+ years of experience in software engineering and leadership
- Affordable pricing; discounts available for underrepresented groups
- Sessions available in English or Portuguese

## How it works

I use Topmate to schedule mentoring sessions. Visit my profile to see available times and book a session:

[Book on Topmate](https://topmate.io/luizgonzaga)

## What to expect

Sessions are relaxed but focused. Common topics include career growth, engineering leadership, AI adoption, resume review, interview preparation, and team dynamics.

## Testimonials

Feedback from past mentees is available on [LinkedIn](https://www.linkedin.com/in/luizgonzaga/#recommendations) and [Topmate](https://topmate.io/luizgonzaga#testimonials).
`;

export const GET: APIRoute = () => {
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
