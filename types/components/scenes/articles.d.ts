export interface ArticleFrontmatter {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  author?: string;
  published?: boolean;
}

export interface ArticleMarkdownProps {
  slug: string;
  frontmatter: ArticleFrontmatter;
  html: string;
}

export interface ArticlesProps {
  articles?: ArticleMarkdownProps[];
}
