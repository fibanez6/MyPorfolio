import { GTagManager } from '../components/google/GTagManager';
import NavBar from '../components/NavBar';
import Certificates from '../components/sections/Certificate';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import HeroSection from '../components/sections/Hero';
import { Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo-config';


export default function Home() {
  return (
    <div>
      {/* HEAD */}
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={false}/>
      <GTagManager />

      {/* BODY */}
      <NavBar />
      <HeroSection />
      <Stack
        spacing="1.5rem"
        maxW={"8xl"}
        m="0 auto"
        p={{ sm: 5, md: 5, lg: 16 }}
        overflow="hidden"
      >
        <Experience />
        <Certificates />
        <Contact />
      </Stack>
    </div>
  )
}
