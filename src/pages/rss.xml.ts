import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../config';

export const GET = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const baseUrl = SITE_URL.replace(/\/+$/g, '');

  const rssItems = sortedPosts.map(({ data, id }) => {
    if (data.external) {
      return {
        title: data.title,
        pubDate: data.date,
        link: data.url,
      };
    }

    return {
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `${baseUrl}/blog/${id}`,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: baseUrl,
    items: rssItems,
  });
};
