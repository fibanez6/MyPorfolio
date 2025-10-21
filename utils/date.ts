export const sortbByDate = (a: any, b: any): number => {
  return (
    new Date(b.frontmatter.start).getTime() -
    new Date(a.frontmatter.start).getTime()
  );
};

export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Use a consistent format that doesn't depend on locale
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const year = dateObj.getFullYear();
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();

  return `${month} ${day}, ${year}`;
};
