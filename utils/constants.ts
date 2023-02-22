/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { Sections } from 'types/utils/constants';

export const SECTIONS: Sections = {
  hero: {
    Component: dynamic(() => import('components/scenes/Hero')),
    isHero: true
  },
  about: {
    Component: dynamic(() => import('components/scenes/About'))
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
