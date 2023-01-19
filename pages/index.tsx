import { GTagManager } from 'components/google/GTagManager';
import NavBar from 'scenes/NavBar';
import Certificates from 'scenes/Certificates';
import Contact from 'scenes/Contact';
import Experience from 'scenes/Experience';
import Hero from 'scenes/Hero';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'next-seo-config';
import { ReactElement, useEffect, useState } from 'react';
import DotNav from 'scenes/DotNav';
import { motion } from 'framer-motion';
import glob from 'glob';
import fs from 'fs';
import matter from 'gray-matter';
import { MarkdownProps } from 'types/sections/experience';
import { sortbByDate } from 'utils/date';

const Pages = ['Hero', 'Experience', 'Certificates', 'Contact'];

export const getStaticProps = async (): Promise<any> => {
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

export default function Home({ jobs }: any): ReactElement {
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
      {/* HEAD */}
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={false} />
      <GTagManager />

      {/* BODY */}
      <NavBar
        pages={Pages.slice(1)}
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
      />
      {isDesktop && <DotNav pages={Pages} selectedPage={selectedPage} />}

      <motion.div
        viewport={{ amount: 'all' }}
        onViewportEnter={() => setSelectedPage('hero')}
      >
        <Hero />
      </motion.div>
      <Stack
        as="main"
        minH="100vh"
        maxW={'6xl'}
        m="0 auto"
        gap={2}
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: 10 }}
      >
        <motion.div
          viewport={{ amount: 'all' }}
          onViewportEnter={() => setSelectedPage('experience')}
        >
          <Experience jobs={jobs} />
        </motion.div>
        <motion.div
          viewport={{ amount: 'all' }}
          onViewportEnter={() => setSelectedPage('certificates')}
        >
          <Certificates />
        </motion.div>
        <motion.div
          viewport={{ amount: 'all' }}
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </Stack>
    </>
  );
}
