import { Dispatch, SetStateAction } from "react";

export interface NavBarProps {
  pages: string[];
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}

export interface NavLinkProps {
  page: string;
  isSelected: boolean;
  setSelectedPage: Dispatch<SetStateAction<string>>;
  onHamburgerIcon?: () => void;
}