import { cvData, cvKeywords } from '@components/cv/cvData';

const name = cvData.header.name;
export const MY_NAME = `${name.first} ${name.middle} ${name.last}, ${name.title}`;
export const SITE_TITLE = `${MY_NAME} - Software Engineering Leader`;
export const SITE_DESCRIPTION = cvData.header.introduction.join(' ');

export const keywordList = cvKeywords.join(', ');

export const TWITTER_HANDLE = '@yourtwitterhandle';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;