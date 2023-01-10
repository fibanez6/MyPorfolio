"use client";

import styles from "./page.module.css";
import { Stack, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Certificates from "../components/sections/Certificate";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import { useEffect, useState } from "react";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

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
        gap={{ base: 16, sm: 5, md: 5, lg: 16 }}
        p={{ base: 16, sm: 5, md: 10, lg: 16 }}
      >
        <Experience />
        <Certificates />
        <Contact />
      </Stack>
    </>
  );
}
