import type { ComponentType } from 'react';

export interface Section {
  Component: ComponentType<any>;
  isHero?: boolean = false;
}

export type Sections = Record<string, Section>;
