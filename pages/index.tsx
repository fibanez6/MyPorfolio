import { Stack } from '@chakra-ui/react';
import Section from 'components/layout/Section';
import NavBar from 'components/scenes/NavBar';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import type { ArticleMarkdownProps } from 'types/components/scenes/articles';
import type { MarkdownProps } from 'types/components/scenes/experience';
import { SECTIONS } from 'utils/constants';
import { sortbByDate } from 'utils/date';

export const getStaticProps: GetStaticProps = async () => {
  const jobs: MarkdownProps[] = glob
    .sync('content/jobs/**/*.md')
    .map((file) => {
      const slug = file.replace('.md', '');
      const readFile = fs.readFileSync(file, 'utf-8');
      const { data, content } = matter(readFile);
      return {
        slug,
        frontmatter: data,
        html: content
      };
    });

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
    });

  return {
    props: {
      jobs: jobs.sort(sortbByDate),
      articles: articles.sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      )
    }
  };
};

export default function Home({
  jobs,
  articles
}: InferGetServerSidePropsType<typeof getStaticProps>): ReactElement {
  const [selectedPage, setSelectedPage] = useState('hero');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionNames = Object.keys(SECTIONS);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('hero');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    const handleResize = (): void => {
      setIsDesktop(window.innerWidth >= 1060);
    };

    // Set initial desktop state
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  const DynamicDotNav = dynamic(
    async () => await import('components/scenes/DotNav'),
    {
      ssr: false
    }
  );

  const renderSections = (): ReactElement[] =>
    Object.entries(SECTIONS)
      .filter(([_, { isHero }]) => !isHero)
      .map(([id, { Component, title }]) => {
        let props = {};
        if (id === 'experience') {
          props = { jobs };
        } else if (id === 'articles') {
          props = { articles };
        }
        return (
          <Section
            key={id}
            id={id}
            title={title}
            withMotion={true}
            onViewportEnter={() => setSelectedPage(id)}
          >
            <Component {...props} />
          </Section>
        );
      });

  return (
    <>
      <NavBar
        pages={sectionNames.slice(1)}
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
      />
      {isDesktop && (
        <DynamicDotNav pages={sectionNames} selectedPage={selectedPage} />
      )}
      <Section id={'hero'} onViewportEnter={() => setSelectedPage('hero')}>
        <SECTIONS.hero.Component />
      </Section>
      <Stack
        as="main"
        minH="100vh"
        maxW={'6xl'}
        m="0 auto"
        gap={2}
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: '5rem' }}
      >
        {renderSections()}
      </Stack>
    </>
  );
}
