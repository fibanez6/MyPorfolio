export interface ExpProps {
  jobs: MarkdownProps[];
}

export interface MarkdownProps {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
  html: string;
}