import { Stack, useMediaQuery } from '@chakra-ui/react';
import SceneWithMotion from 'components/pages/SceneWithMotion';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import Certificates from 'scenes/Certificates';
import Contact from 'scenes/Contact';
import DotNav from 'scenes/DotNav';
import Experience from 'scenes/Experience';
import Hero from 'scenes/Hero';
import NavBar from 'scenes/NavBar';
import type { MarkdownProps } from 'types/scenes/experience';
import { sortbByDate } from 'utils/date';

const Pages = ['Hero', 'Experience', 'Certificates', 'Contact'];

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

  return (
    <>
      <NavBar
        pages={Pages.slice(1)}
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
      />
      {isDesktop && <DotNav pages={Pages} selectedPage={selectedPage} />}

      <SceneWithMotion onViewportEnter={() => setSelectedPage('hero')}>
        <Hero />
      </SceneWithMotion>
      <Stack
        as="main"
        minH="100vh"
        maxW={'6xl'}
        m="0 auto"
        gap={2}
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: 10 }}
      >
        <SceneWithMotion onViewportEnter={() => setSelectedPage('experience')}>
          <Experience jobs={jobs} />
        </SceneWithMotion>
        <SceneWithMotion
          onViewportEnter={() => setSelectedPage('certificates')}
        >
          <Certificates />
        </SceneWithMotion>
        <SceneWithMotion onViewportEnter={() => setSelectedPage('contact')}>
          <Contact />
        </SceneWithMotion>
      </Stack>
    </>
  );
}
