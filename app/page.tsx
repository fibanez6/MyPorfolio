"use client";

import { Flex } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Certificates from '../components/sections/Certificate';
import ContactSection from '../components/sections/Contact';
import ExperienceSection from '../components/sections/Experience';
import HeroSection from '../components/sections/Hero';
import SkillsSection from '../components/sections/Skill';

export default function Home() {
  return (
    <main>
      <Flex direction="column">
        <NavBar />
      </Flex>
    </main>
  )
}
