import { GTagManager } from "../components/google/GTagManager";
import NavBar from "../components/NavBar";
import Certificates from "../scenes/Certificate";
import Contact from "../scenes/Contact";
import Experience from "../scenes/Experience";
import HeroSection from "../scenes/Hero";
import { Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo-config";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

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
    <div>
      {/* HEAD */}
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={false} />
      <GTagManager />

      {/* BODY */}
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
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
  );
}
