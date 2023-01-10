"use client";

import { Dispatch, SetStateAction } from "react";
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

interface NavBarProps {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}

interface NavLinkProps {
  page: string;
  isSelected: boolean;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}

const Pages = ["About", "Experience", "Certificates", "Contact"];

const NavLink = ({ page, isSelected, setSelectedPage }: NavLinkProps) => {
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
      variant={isSelected ? "selected": undefined}
      href={`#${_page}`}
      onClick={() => setSelectedPage(_page)}
    >
      {page}
    </Link>
  );
};

const NavBar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>Logo</Box>
        <Stack direction={"row"} align={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Pages.map((page) => (
              <NavLink
                key={page}
                page={page}
                isSelected={page.toLowerCase() === selectedPage}
                setSelectedPage={setSelectedPage}
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
            {Pages.map((page) => (
              <NavLink
                key={page}
                page={page}
                isSelected={page.toLowerCase() === selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
