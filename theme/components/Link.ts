import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { theme } from "@chakra-ui/react";

const Link = {
  variants: {
    solid: ({ colorMode }) => ({
      display: "inline-flex",
      bg: colorMode === 'light' ? '#0D74FF' : '#FF5430',
      color: "var(--chakra-colors-white)",
      borderRadius: "var(--chakra-radii-md)",
      paddingInlineStart: "var(--chakra-space-4)",
      paddingInlineEnd: "var(--chakra-space-4)",
      lineHeight: "1.2",
      fontWeight: "var(--chakra-fontWeights-semibold)",
      fontSize: "var(--chakra-fontSizes-md)",
      height: "var(--chakra-sizes-10)",
      minWidth: "var(--chakra-sizes-10)",
      verticalAlign: "middle",
      alignItems: "center",
      _hover: {
        bg: colorMode === 'light' ? '#FF5430' : '#0D74FF',
      }
    }),
    selected: ({ colorMode }) => ({
      ...theme.components.Link.defaultProps,
      borderRadius: "var(--chakra-radii-md)",
      border: "solid 2px",
      borderColor: colorMode === 'light' ? '#0D74FF' : '#FF5430',
      fontWeight:"bold"
    })
    
  }
} as ComponentSingleStyleConfig;

export default Link;