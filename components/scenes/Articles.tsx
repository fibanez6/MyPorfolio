'use client';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import NextLink from 'next/link';
import type { ReactElement } from 'react';
import { useEffect, useMemo, useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type {
  ArticleMarkdownProps,
  ArticlesProps
} from 'types/components/scenes/articles';
import { ARTICLES_CONFIG } from 'utils/constants';
import { formatDate } from 'utils/date';

const Articles = ({ articles = [] }: ArticlesProps): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const latestArticles = useMemo(() => {
    return articles.slice(0, ARTICLES_CONFIG.LATEST_ARTICLES_COUNT);
  }, [articles]);

  const truncateContent = (
    content: string,
    maxLength: number = ARTICLES_CONFIG.CONTENT_TRUNCATE_LENGTH
  ): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  if (!mounted) {
    return (
      <VStack spacing={6} align="stretch">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {latestArticles.map((article: ArticleMarkdownProps) => (
            <Card key={article.slug} variant="outline" h="100%">
              <CardHeader pb={2}>
                <Heading as="h3" size="md" noOfLines={2} mb={2}>
                  {article.frontmatter.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {formatDate(article.frontmatter.date)}
                </Text>
                {article.frontmatter.tags && (
                  <Text fontSize="xs" color="blue.500" mt={1}>
                    {article.frontmatter.tags.join(', ')}
                  </Text>
                )}
              </CardHeader>
              <CardBody pt={0}>
                <Text fontSize="sm" color="gray.600" mb={2}>
                  {article.frontmatter.description ?? 'Loading...'}
                </Text>
                <Link
                  as={NextLink}
                  href={`/articles/${article.slug.replace(
                    'content/articles/',
                    ''
                  )}`}
                  color="blue.500"
                  fontSize="sm"
                  mt={3}
                  display="inline-block"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Read more →
                </Link>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    );
  }
  return (
    <VStack spacing={6} align="stretch">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {latestArticles.map((article: ArticleMarkdownProps) => (
          <Card key={article.slug} variant="outline" h="100%">
            <CardHeader pb={2}>
              <Heading as="h3" size="md" noOfLines={2} mb={2}>
                {article.frontmatter.title}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {formatDate(article.frontmatter.date)}
              </Text>
              {article.frontmatter.tags && (
                <Text fontSize="xs" color="blue.500" mt={1}>
                  {article.frontmatter.tags.join(', ')}
                </Text>
              )}
            </CardHeader>

            <CardBody pt={0}>
              <Box fontSize="sm" color="gray.600">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({ children }) => <Text mb={2}>{children}</Text>,
                    a: ({ href, children }) => (
                      <Text
                        as="span"
                        color="blue.500"
                        textDecoration="underline"
                      >
                        {children}
                      </Text>
                    ),
                    h1: () => null,
                    h2: () => null,
                    h3: () => null,
                    h4: () => null,
                    h5: () => null,
                    h6: () => null
                  }}
                >
                  {truncateContent(article.html)}
                </Markdown>
              </Box>

              {article.frontmatter.description && (
                <Text fontSize="sm" color="gray.500" mt={2} fontStyle="italic">
                  {article.frontmatter.description}
                </Text>
              )}

              <Link
                as={NextLink}
                href={`/articles/${article.slug.replace(
                  'content/articles/',
                  ''
                )}`}
                color="blue.500"
                fontSize="sm"
                mt={3}
                display="inline-block"
                _hover={{ textDecoration: 'underline' }}
              >
                Read more →
              </Link>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {articles.length > ARTICLES_CONFIG.LATEST_ARTICLES_COUNT && (
        <Box textAlign="center" mt={6}>
          <Link
            as={NextLink}
            href="/articles"
            color="blue.500"
            fontSize="lg"
            fontWeight="medium"
            _hover={{ textDecoration: 'underline' }}
          >
            View All Articles →
          </Link>
        </Box>
      )}

      {articles.length === 0 && (
        <Box textAlign="center" py={8}>
          <Text color="gray.500" fontSize="lg">
            No articles available yet.
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default Articles;
