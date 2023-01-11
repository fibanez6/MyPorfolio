import { ComponentSingleStyleConfig, keyframes } from '@chakra-ui/react';
import { theme } from "@chakra-ui/react";
import { jello } from '../frames';

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
      fontWeight: "bold"
    }),
    dot: ({ colorMode }) => ({
      bg: colorMode === 'light' ? '#0D74FF' : '#FF5430',
      opacity: "1",
      borderRadius: "50%",
      h: "0.75rem",
      w: "0.75rem",
    }),
    dotSelected: ({ colorMode }) => ({
      position: "relative",
      bg: colorMode === 'light' ? '#FF5430' : '#0D74FF',
      opacity: "1",
      borderRadius: "50%",
      h: "0.75rem",
      w: "0.75rem",
      animation: `${jello} 1.5s ease 0s 1 normal forwards`,
      _before: {
        content: "''",
        position: "absolute",
        h: "1.5rem",
        w: "1.5rem",
        left: "-50%",
        top: "-50%",
        borderWidth: "2px",
        borderRadius: "50%",
        borderColor: colorMode === 'light' ? '#FF5430' : '#0D74FF',
      }
    }),

  }
} as ComponentSingleStyleConfig;

export default Link;