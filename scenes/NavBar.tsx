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

const NavLink = ({ page, isSelected, onHamburgerIcon }: NavLinkProps) => {
  const _page = page.toLowerCase();

  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      variant={isSelected ? "selected" : undefined}
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

  return (
    <Box
      position={"fixed"}
      top={0}
      bg={isTopOfPage ? "" : useColorModeValue("#02054B", "gray.900")}
      color={
        isTopOfPage ? useColorModeValue("gray.100", "gray.900") : "gray.100"
      }
      w={"full"}
      px={4}
      zIndex={10}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>
          <Link href={"#"}>Logo</Link>
        </Box>
        <Stack direction={"row"} align={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {pages.map((page) => (
              <NavLink
                key={page}
                page={page}
                isSelected={page.toLowerCase() === selectedPage}
              />
            ))}
          </HStack>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
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
      ) : null}
    </Box>
  );
};

export default NavBar;
