export const sortbByDate = (a: any, b: any): number => {
  return (
    new Date(b.frontmatter.start).getTime() -
    new Date(a.frontmatter.start).getTime()
  );
};
