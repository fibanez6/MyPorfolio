import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import Contact from 'components/scenes/Contact';
import NavBar from 'components/scenes/NavBar';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import type { ReactElement } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { ArticleMarkdownProps } from 'types/components/scenes/articles';
import { formatDate } from 'utils/date';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = glob.sync('content/articles/**/*.md');
  const paths = articles.map((article) => ({
    params: {
      slug: article.replace('content/articles/', '').replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = params?.slug as string;
  const articlePath = `content/articles/${slug}.md`;

  if (!fs.existsSync(articlePath)) {
    return {
      notFound: true
    };
  }

  const readFile = fs.readFileSync(articlePath, 'utf-8');
  const { data, content } = matter(readFile);

  const article: ArticleMarkdownProps = {
    slug,
    frontmatter: data as ArticleMarkdownProps['frontmatter'],
    html: content
  };

  return {
    props: {
      article
    }
  };
};

export default function ArticlePage({
  article
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return (
    <>
      <NextSeo
        title={`${String(article.frontmatter.title ?? '')} | Fernando Ibanez`}
        description={article.frontmatter.description ?? ''}
        openGraph={{
          title: article.frontmatter.title ?? '',
          description: article.frontmatter.description ?? '',
          type: 'article',
          url: `/articles/${String(article.slug ?? '').replace(
            'content/articles/',
            ''
          )}`,
          article: {
            publishedTime: article.frontmatter.date,
            authors: [article.frontmatter.author ?? 'Fernando Ibanez'],
            tags: article.frontmatter.tags ?? []
          }
        }}
      />

      {/* Header */}
      <NavBar pages={[]} selectedPage="" />

      <Container maxW="4xl" py={8}>
        <VStack spacing={6} align="stretch">
          {/* Back button */}
          <Box>
            <Button
              as={NextLink}
              href="/articles"
              variant="ghost"
              size="sm"
              leftIcon={<span>←</span>}
            >
              Back to Articles
            </Button>
          </Box>

          {/* Article header */}
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="2xl" lineHeight="1.2">
              {article.frontmatter.title}
            </Heading>

            <HStack spacing={4} flexWrap="wrap">
              <Text color="gray.500" fontSize="sm">
                Published {formatDate(article.frontmatter.date)}
              </Text>
              {article.frontmatter.author && (
                <Text color="gray.500" fontSize="sm">
                  by {article.frontmatter.author}
                </Text>
              )}
            </HStack>

            {article.frontmatter.description && (
              <Text fontSize="lg" color="gray.600" fontStyle="italic">
                {article.frontmatter.description}
              </Text>
            )}

            {article.frontmatter.tags && (
              <HStack spacing={2} flexWrap="wrap">
                {article.frontmatter.tags.map((tag: string) => (
                  <Tag key={tag} size="sm" colorScheme="blue">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            )}
          </VStack>

          {/* Article content */}
          <Box
            fontSize="md"
            lineHeight="1.7"
            sx={{
              '& h1': {
                fontSize: '2xl',
                fontWeight: 'bold',
                mt: 8,
                mb: 4
              },
              '& h2': {
                fontSize: 'xl',
                fontWeight: 'bold',
                mt: 6,
                mb: 3
              },
              '& h3': {
                fontSize: 'lg',
                fontWeight: 'bold',
                mt: 4,
                mb: 2
              },
              '& p': {
                mb: 4
              },
              '& ul, & ol': {
                ml: 6,
                mb: 4
              },
              '& li': {
                mb: 1
              },
              '& blockquote': {
                borderLeft: '4px solid',
                borderColor: 'blue.500',
                pl: 4,
                py: 2,
                fontStyle: 'italic',
                bg: 'gray.50',
                mb: 4
              },
              '& code': {
                bg: 'gray.100',
                px: 1,
                py: 0.5,
                borderRadius: 'sm',
                fontSize: 'sm'
              },
              '& pre': {
                bg: 'gray.900',
                color: 'white',
                p: 4,
                borderRadius: 'md',
                overflow: 'auto',
                mb: 4
              },
              '& pre code': {
                bg: 'transparent',
                p: 0
              }
            }}
          >
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {article.html}
            </Markdown>
          </Box>

          {/* Back to articles link */}
          <Box pt={8} borderTop="1px solid" borderColor="gray.200">
            <Button as={NextLink} href="/articles" colorScheme="blue" size="lg">
              ← Back to Articles
            </Button>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Container maxW="6xl" py={8}>
        <Contact />
      </Container>
    </>
  );
}
