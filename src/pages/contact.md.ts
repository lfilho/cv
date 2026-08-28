import type { APIRoute } from 'astro';

const markdown = `# Contact

The best way to reach me depends on what you need. I read every message and aim to respond within the same week.

## Mentorship and career conversations

For mentorship, resume review, career advice, or structured conversations about engineering leadership, please use [Topmate](https://topmate.io/luizgonzaga).

## Everything else

For professional opportunities, speaking invitations, partnerships, or general introductions, [LinkedIn](https://linkedin.com/in/luizgonzaga) is the best place to reach me.

## Other places to find me

- [GitHub](https://github.com/lfilho)
- [SpeakerDeck](https://speakerdeck.com/lfilho)
- Email: [lfilho@gmail.com](mailto:lfilho@gmail.com)

Expected response time: within the same week.
`;

export const GET: APIRoute = () => {
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
