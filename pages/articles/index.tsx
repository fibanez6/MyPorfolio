import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Select,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import Contact from 'components/scenes/Contact';
import NavBar from 'components/scenes/NavBar';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { ArticleMarkdownProps } from 'types/components/scenes/articles';
import { ARTICLES_CONFIG } from 'utils/constants';
import { formatDate } from 'utils/date';

export const getStaticProps: GetStaticProps = async () => {
  const articles: ArticleMarkdownProps[] = glob
    .sync('content/articles/**/*.md')
    .map((file) => {
      const slug = file.replace('.md', '');
      const readFile = fs.readFileSync(file, 'utf-8');
      const { data, content } = matter(readFile);
      return {
        slug,
        frontmatter: data as ArticleMarkdownProps['frontmatter'],
        html: content
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return {
    props: {
      articles
    }
  };
};

export default function ArticlesIndex({
  articles
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState<number>(
    ARTICLES_CONFIG.ARTICLES_PER_PAGE_DEFAULT
  );

  const truncateContent = (
    content: string,
    maxLength: number = ARTICLES_CONFIG.CONTENT_TRUNCATE_LENGTH
  ): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  // Calculate pagination
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, currentPage - halfVisible);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start < maxVisiblePages - 1) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArticlesPerPageChange = (value: string): void => {
    setArticlesPerPage(parseInt(value, 10));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <>
      <NextSeo
        title="All Articles | Fernando Ibanez"
        description="Browse all articles and blog posts"
        openGraph={{
          title: 'All Articles',
          description: 'Browse all articles and blog posts',
          type: 'website'
        }}
      />

      {/* Header */}
      <NavBar pages={[]} selectedPage="" />

      <Container maxW="6xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={4}>
            <Button
              as={NextLink}
              href="/"
              variant="ghost"
              size="sm"
              leftIcon={<span>←</span>}
            >
              Back to Home
            </Button>

            <Heading as="h1" size="2xl" textAlign="center">
              All Articles
            </Heading>

            <Text fontSize="lg" color="gray.600" textAlign="center">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'}{' '}
              available
            </Text>
          </VStack>

          {/* Pagination Controls - Top */}
          {totalPages > 1 && (
            <Flex
              align="center"
              justify="space-between"
              flexWrap="wrap"
              gap={4}
            >
              <Text fontSize="sm" color="gray.600">
                Showing {startIndex + 1}-{Math.min(endIndex, articles.length)}{' '}
                of {articles.length} articles
              </Text>

              <HStack spacing={2}>
                <Text fontSize="sm" color="gray.600">
                  Articles per page:
                </Text>
                <Select
                  size="sm"
                  width="auto"
                  value={articlesPerPage}
                  onChange={(e) => handleArticlesPerPageChange(e.target.value)}
                >
                  {ARTICLES_CONFIG.ARTICLES_PER_PAGE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </HStack>
            </Flex>
          )}

          {/* Articles Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
            {currentArticles.map((article: ArticleMarkdownProps) => (
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
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      mt={2}
                      fontStyle="italic"
                    >
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

          {/* Pagination Controls - Bottom */}
          {totalPages > 1 && (
            <VStack spacing={4}>
              {/* Page Numbers */}
              <HStack spacing={2} justify="center" flexWrap="wrap">
                {/* Previous Button */}
                <IconButton
                  aria-label="Previous page"
                  icon={<span>‹</span>}
                  size="sm"
                  variant={currentPage === 1 ? 'ghost' : 'outline'}
                  isDisabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                />

                {/* First page if not visible */}
                {pageNumbers[0] > 1 && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePageChange(1)}
                    >
                      1
                    </Button>
                    {pageNumbers[0] > 2 && (
                      <Text fontSize="sm" color="gray.500" px={2}>
                        ...
                      </Text>
                    )}
                  </>
                )}

                {/* Page numbers */}
                {pageNumbers.map((page) => (
                  <Button
                    key={page}
                    size="sm"
                    variant={currentPage === page ? 'solid' : 'outline'}
                    colorScheme={currentPage === page ? 'blue' : 'gray'}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}

                {/* Last page if not visible */}
                {pageNumbers[pageNumbers.length - 1] < totalPages && (
                  <>
                    {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                      <Text fontSize="sm" color="gray.500" px={2}>
                        ...
                      </Text>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </Button>
                  </>
                )}

                {/* Next Button */}
                <IconButton
                  aria-label="Next page"
                  icon={<span>›</span>}
                  size="sm"
                  variant={currentPage === totalPages ? 'ghost' : 'outline'}
                  isDisabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </HStack>

              {/* Page Info */}
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Page {currentPage} of {totalPages}
              </Text>
            </VStack>
          )}

          {articles.length === 0 && (
            <Box textAlign="center" py={12}>
              <Text color="gray.500" fontSize="lg">
                No articles available yet.
              </Text>
            </Box>
          )}
        </VStack>
      </Container>

      {/* Footer */}
      <Container maxW="6xl" py={8}>
        <Contact />
      </Container>
    </>
  );
}
