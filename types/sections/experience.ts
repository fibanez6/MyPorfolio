export interface ExpProps {
  jobs: MarkdownProps[];
}

export interface MarkdownProps {
  slug: string;
  frontmatter: {
    [key in string]: any;
  };
  html: string;
}
