import { GTagManager } from "../components/google/GTagManager";
import NavBar from "../scenes/NavBar";
import Certificates from "../scenes/Certificate";
import Contact from "../scenes/Contact";
import Experience from "../scenes/Experience";
import Hero from "../scenes/Hero";
import { Stack, useMediaQuery } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo-config";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimension";
import DotNav from "../scenes/DotNav";
import { motion } from "framer-motion";

const Pages = ["Hero", "Experience", "Certificates", "Contact"];

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("hero");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isDesktop] = useMediaQuery("(min-width: 1060px)");

  console.log("isDesktop: " + isDesktop);

  const { width, height } = useWindowDimensions();
  console.log("width: " + width + " height: " + height);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("hero");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        viewport={{ amount: "all" }}
        onViewportEnter={() => setSelectedPage("hero")}
      >
        <Hero />
      </motion.div>
      <Stack
        as="main"
        minH="100vh"
        maxW={"6xl"}
        m="0 auto"
        gap={2}
        px={{ base: 5, sm: 5, md: 10, lg: 16 }}
        _last={{ pb: 10 }}
      >
        <motion.div
          viewport={{ amount: "all" }}
          onViewportEnter={() => setSelectedPage("experience")}
        >
          <Experience />
        </motion.div>
        <motion.div
          viewport={{ amount: "all" }}
          onViewportEnter={() => setSelectedPage("certificates")}
        >
          <Certificates />
        </motion.div>
        <motion.div
          viewport={{ amount: "all" }}
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </Stack>
    </>
  );
}
