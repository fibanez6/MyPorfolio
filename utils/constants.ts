/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { Sections } from 'types/utils/sections';

export const DEFAULT_LOCALE = 'en';

export const SECTIONS_CONTENT: Sections = {
  hero: {
    Component: dynamic(() => import('scenes/Hero')),
    isHero: true
  },
  experience: {
    Component: dynamic(() => import('scenes/Experience'))
  },
  certificates: {
    Component: dynamic(() => import('scenes/Certificates'))
  },
  contact: {
    Component: dynamic(() => import('scenes/Contact'))
  }
};
