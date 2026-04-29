import { format, parseISO } from 'date-fns';

export const sortbByDate = (a: any, b: any): number => {
  return (
    new Date(b.frontmatter.start).getTime() -
    new Date(a.frontmatter.start).getTime()
  );
};

export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMMM d, yyyy');
};

export const formatShortDate = (date: Date): string => {
  return format(date, 'EEE d MMM');
};
