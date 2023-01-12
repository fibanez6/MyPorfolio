import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { theme } from "@chakra-ui/react";
import { bgMode } from '../color';

const Span = {
  variants: {
    selected: ({ colorMode }) => ({
      bg: "primary.main"
    }),
  }
} as ComponentSingleStyleConfig;

export default Span;
