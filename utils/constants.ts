/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { Sections } from 'types/utils/constants';

export const SECTIONS: Sections = {
  hero: {
    Component: dynamic(() => import('scenes/Hero')),
    isHero: true
  },
  about: {
    Component: dynamic(() => import('scenes/About'))
  },
  experience: {
    Component: dynamic(() => import('scenes/Experience')),
    title: 'Experience'
  },
  certificates: {
    Component: dynamic(() => import('scenes/Certificates')),
    title: 'Certificates'
  },
  contact: {
    Component: dynamic(() => import('scenes/Contact'))
  }
};
