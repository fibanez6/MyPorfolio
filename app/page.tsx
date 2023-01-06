"use client";

import styles from './page.module.css'
import { Stack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Certificates from '../components/sections/Certificate';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stack 
        as="main"
        minH="100vh"
        maxW={"6xl"}
        m="0 auto"
        gap={{ base: 16, sm: 5, md: 5, lg: 16 }}
        p={{ base: 16, sm: 5, md: 5, lg: 16 }}
      >
        <Experience />
        <Certificates />
        <Contact />
      </Stack>
    </>

  )
}
