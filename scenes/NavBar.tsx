"use client";

import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLinkProps, NavProps } from "../types/sections/Nav";
import TabSlider from "../components/TabSlider";

const NavLink = ({ page, isSelected, onHamburgerIcon }: NavLinkProps) => {
  const _page = page.toLowerCase();

  return (
    <Link
      p={2}
      w="9rem"
      textAlign="center"
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={`#${_page}`}
      onClick={() => {
        if (typeof onHamburgerIcon == "function") {
          onHamburgerIcon();
        }
      }}
    >
      {page}
    </Link>
  );
};

const NavBar = ({ pages, isTopOfPage, selectedPage }: NavProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const moveSlider = () => {
    const capitalized = selectedPage && selectedPage[0].toUpperCase() + selectedPage.slice(1);
    const idx = pages.indexOf(capitalized)
    return idx * 8 + idx
  }

  const navStyles = () => {
    let styles = {};

    if (!isTopOfPage) {
      styles = {
        ...styles,
        bg: useColorModeValue("#02054Bc9", "gray.900"),
        backdropFilter: "blur(7.6px)"
      }
    }
    if (isOpen) {
      styles = {
        ...styles,
        bg: useColorModeValue("#02054Bc9", "gray.900"),
        backdropFilter: "blur(7.6px)",
        h: "100vh"
      }
    }
    return styles;
  }

  return (
    <Box
      position={"fixed"}
      top={0}
      color={
        isTopOfPage ? useColorModeValue("gray.100", "gray.900") : "gray.100"
      }
      w={"full"}
      h="3.6rem"
      px={4}
      zIndex={"sticky"}
      transition=".5s ease-in-out"
      boxShadow= {isTopOfPage ? "none" : "0px 1px 6px 4px #02054bc9"}
      {...navStyles()}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Mobile */}
        <IconButton
          size={"md"}
          variant="ghost"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          zIndex="docked"
          onClick={isOpen ? onClose : onOpen}
        />
        <Box
          opacity={isOpen ? 0 : 1}
          transition=".25s ease-in-out"
        >
          <Link href={"#"}>Logo</Link>
        </Box>
        <Stack direction={"row"} align={"center"}>
          <HStack 
            as={"nav"} 
            display={{ base: "none", md: "flex" }} 
            position="relative"
            spacing={0}
            overflow="hidden"
            >
            {pages.map((page) => (
              <NavLink
                key={page}
                page={page}
                isSelected={page.toLowerCase() === selectedPage}
              />
            ))}
            <TabSlider left={`${moveSlider()}rem`}  w="9rem" />
          </HStack>
          <Button
            opacity={isOpen ? 0 : 1}
            transition=".25s ease-in-out"
            onClick={toggleColorMode}
            variant="ghost"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      {/* Mobile Content */}
      <Box
        pb={4}
        display={{ md: "none" }}
        zIndex={1}
      >
        <Stack
          as={"nav"}
          spacing={4}
          alignItems="center"
          gap={"2rem"}
          opacity={isOpen ? 1 : 0}
          transform={isOpen ? "" : "translate(0, -150%)"}
          transition=".5s .1s ease-in-out"
        >
          {pages.map((page) => (
            <NavLink
              key={page}
              page={page}
              isSelected={page.toLowerCase() === selectedPage}
              onHamburgerIcon={isOpen ? onClose : onOpen}
            />
          ))}
        </Stack>

      </Box>

    </Box>
  );
};

export default NavBar;