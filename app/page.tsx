"use client";

import styles from "./page.module.css";
import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Certificates from "../scenes/Certificate";
import Contact from "../scenes/Contact";
import Experience from "../scenes/Experience";
import Hero from "../scenes/Hero";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimension";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  
  const { width, height } = useWindowDimensions();
  console.log('width: ' + width + ' height: ' + height);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero />
      <Stack
        as="main"
        minH="100vh"
        maxW={"6xl"}
        m="0 auto"
        gap={ 2 }
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: 10 }}
      >
        <Experience />
        <Certificates />
        <Contact />
      </Stack>
    </>
  );
}
