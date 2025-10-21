/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { ArticlesConfig, Sections } from 'types/utils/constants';

/**
 * Configuration for Articles component and pagination
 *
 * @LATEST_ARTICLES_COUNT - Number of articles to show on homepage (default: 6)
 * @ARTICLES_PER_PAGE_DEFAULT - Default number of articles per page in pagination (default: 6)
 * @ARTICLES_PER_PAGE_OPTIONS - Available options for articles per page (default: [3, 6, 9, 12])
 * @CONTENT_TRUNCATE_LENGTH - Maximum character length for article content preview (default: 150)
 */
export const ARTICLES_CONFIG: ArticlesConfig = {
  LATEST_ARTICLES_COUNT: 6,
  ARTICLES_PER_PAGE_DEFAULT: 6,
  ARTICLES_PER_PAGE_OPTIONS: [3, 6, 9, 12],
  CONTENT_TRUNCATE_LENGTH: 150
} as const;

export const SECTIONS: Sections = {
  hero: {
    Component: dynamic(() => import('components/scenes/Hero')),
    isHero: true
  },
  about: {
    Component: dynamic(() => import('components/scenes/About'))
  },
  articles: {
    Component: dynamic(() => import('components/scenes/Articles')),
    title: 'Latest Articles'
  },
  experience: {
    Component: dynamic(() => import('components/scenes/Experience')),
    title: 'Experience'
  },
  skills: {
    Component: dynamic(() => import('components/scenes/Skills')),
    title: 'Skills'
  },
  certificates: {
    Component: dynamic(() => import('components/scenes/Certificates')),
    title: 'Certificates'
  },
  contact: {
    Component: dynamic(() => import('components/scenes/Contact'))
  }
};
