'use client';

import { Stack, useMediaQuery } from '@chakra-ui/react';
import NavBar from 'scenes/NavBar';
import Certificates from 'scenes/Certificates';
import Contact from 'scenes/Contact';
import Experience from 'scenes/Experience';
import Hero from 'scenes/Hero';
import { useEffect, useState } from 'react';
import DotNav from 'scenes/DotNav';
import glob from 'glob';
import fs from 'fs';
import matter from 'gray-matter';
import { MarkdownProps } from 'types/sections/experience';
import { sort_by_date } from 'utils/date';

const Pages = ['Hero', 'Experience', 'Certificates', 'Contact'];

const getStaticProps = async () => {
  const jobs: MarkdownProps[] = glob.sync('docs/jobs/**/*.md').map((file) => {
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
      jobs: jobs.sort(sort_by_date)
    }
  };
};

export default function Home({ jobs }: any) {
  const [selectedPage, setSelectedPage] = useState('hero');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isDesktop] = useMediaQuery('(min-width: 1060px)');

  // const { width, height } = useWindowDimensions();
  // console.log("width: " + width + " height: " + height);

  useEffect(() => {
    const handleScroll = () => {
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
      {isDesktop && (
        <DotNav pages={Pages.slice(1)} selectedPage={selectedPage} />
      )}
      <Hero />
      <Stack
        as="main"
        minH="100vh"
        maxW={'6xl'}
        m="0 auto"
        gap={2}
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: 10 }}
      >
        <Experience jobs={jobs} />
        <Certificates />
        <Contact />
      </Stack>
    </>
  );
}
