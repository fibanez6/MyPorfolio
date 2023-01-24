import { Stack, useMediaQuery } from '@chakra-ui/react';
import SceneWithMotion from 'components/pages/SceneWithMotion';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import NavBar from 'scenes/NavBar';
import type { MarkdownProps } from 'types/scenes/experience';
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

  return {
    props: {
      jobs: jobs.sort(sortbByDate)
    }
  };
};

export default function Home({
  jobs
}: InferGetServerSidePropsType<typeof getStaticProps>): ReactElement {
  const [selectedPage, setSelectedPage] = useState('hero');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isDesktop] = useMediaQuery('(min-width: 1060px)');
  const sectionNames = Object.keys(SECTIONS);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('hero');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  const DynamicDotNav = dynamic(() => import('scenes/DotNav'), {
    ssr: false
  });

  const renderSections = ({ hero = false }): ReactElement[] =>
    Object.entries(SECTIONS)
      .filter(([_, { isHero }]) => (hero ? isHero : !isHero))
      .map(([id, { Component }]) => {
        const props = id === 'experience' ? { jobs } : {};
        return (
          <SceneWithMotion key={id} onViewportEnter={() => setSelectedPage(id)}>
            <Component {...props} />
          </SceneWithMotion>
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
      {renderSections({ hero: true })}
      <Stack
        as="main"
        minH="100vh"
        maxW={'6xl'}
        m="0 auto"
        gap={2}
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: 10 }}
      >
        {renderSections({ hero: false })}
      </Stack>
    </>
  );
}
