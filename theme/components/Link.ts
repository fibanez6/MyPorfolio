import { ComponentSingleStyleConfig } from '@chakra-ui/react';

const Link = {
  variants: {
    solid: ({colorMode}) => ({
      display: "inline-flex",
      bg: colorMode === 'light' ? '#0D74FF' : '#FF5430',
      borderRadius: "var(--chakra-radii-md)",
      color: "var(--chakra-colors-white)",
      lineHeight: "1.2",
      fontWeight: "var(--chakra-fontWeights-semibold)",
      textAlign: "center",
      height: "var(--chakra-sizes-10)",
      minWidth: "var(--chakra-sizes-10)",
      fontSize: "var(--chakra-fontSizes-md)",
      verticalAlign: "middle",
      justifyContent: "center",
      paddingInlineStart: "var(--chakra-space-4)",
      paddingInlineEnd: "var(--chakra-space-4)",
      _hover: {
        bg: colorMode === 'light' ? '#FF5430' : '#0D74FF',
      }
    })
  }
} as ComponentSingleStyleConfig;

export default Link;