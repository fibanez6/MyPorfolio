import type { ReactElement } from 'react';

export interface TimelineListProps {
  data: TimelineProps[];
}

export interface TimelineProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  content: ReactElement | string;
}

export interface TimelineRowProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  content: ReactElement | string;
  index: number;
  arrLength: number;
}
