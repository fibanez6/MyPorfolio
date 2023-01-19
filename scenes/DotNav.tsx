"use client"

import { Link, VStack } from "@chakra-ui/react"
import { NavLinkProps, NavProps } from "types/sections/Nav"

const  DotLink = ({ page, isSelected }: NavLinkProps) => {
  const _page = page.toLowerCase()
  return (
    <Link 
      href={`#${_page}`} 
      variant={isSelected ? "dotSelected" : "dot"} 
      aria-label={_page}
    />
  )
}

const DotNav = ({ pages, selectedPage }: NavProps) => {
  return (
    <VStack position={"fixed"} gap={0.5} top="55%" right="1.75rem">
      {pages.map((page) => (
        <DotLink
          key={page}
          page={page}
          isSelected={page.toLowerCase() == selectedPage}
        />
      ))}
    </VStack>
  )
}

export default DotNav
