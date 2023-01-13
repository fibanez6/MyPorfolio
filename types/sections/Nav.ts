export interface NavProps {
  pages: string[];
  isTopOfPage?: boolean;
  selectedPage: string;
}

export interface NavLinkProps {
  page: string;
  isSelected: boolean;
  onHamburgerIcon?: () => void;
}