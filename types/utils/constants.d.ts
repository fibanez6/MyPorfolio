import type { ComponentType } from 'react';

export interface Section {
  Component: ComponentType<any>;
  isHero?: boolean = false;
  title?: string;
}

export type Sections = Record<string, Section>;
