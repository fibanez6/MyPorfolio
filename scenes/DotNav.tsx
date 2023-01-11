'use client';

import { Link, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface DotNavProps {
  pages: string[];
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}

interface DotLinkProps {
  page: string;
  isSelected?: boolean;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}

const DotLink = ({
  page,
  isSelected,
  setSelectedPage,
}: DotLinkProps) => {
  const _page = page.toLowerCase();

  return (
    <Link
      href={`#${_page}`}
      variant={isSelected ? "dotSelected" : "dot"}
      onClick={() => setSelectedPage(_page) }
    />
  );
};

const DotNav = ({ pages, selectedPage, setSelectedPage }: DotNavProps) => {
  return (
    <VStack
      position={"fixed"}
      gap={0.5}
      top="55%"
      right="1.75rem"
    >
      {pages.map((page) => (
        <DotLink
          key={page}
          page={page}
          isSelected={page.toLowerCase() === selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </VStack>
  )
}

export default DotNav;