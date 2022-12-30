import { Flex } from '@chakra-ui/react';
import Head from 'next/head'
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import Certificates from '../components/sections/Certificate';
import ContactSection from '../components/sections/Contact';
import ExperienceSection from '../components/sections/Experience';
import HeroSection from '../components/sections/Hero';
import SkillsSection from '../components/sections/Skill';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fibanez.com</title>
        <meta name="description" content="My personal website" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column">
        {/* <LoginForm /> */}
        <NavBar />
        <HeroSection />
        <ExperienceSection />
        <Certificates />
        <SkillsSection />
        <ContactSection />
      </Flex>
    </div>
  )
}
