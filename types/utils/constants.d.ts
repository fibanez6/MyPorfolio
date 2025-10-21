import type { ComponentType } from 'react';

export interface Section {
  Component: ComponentType<any>;
  isHero?: boolean = false;
  title?: string;
}

export type Sections = Record<string, Section>;

export interface ArticlesConfig {
  readonly LATEST_ARTICLES_COUNT: number;
  readonly ARTICLES_PER_PAGE_DEFAULT: number;
  readonly ARTICLES_PER_PAGE_OPTIONS: readonly number[];
  readonly CONTENT_TRUNCATE_LENGTH: number;
}
