import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { theme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools"

const Button = {
  baseStyle: ({ colorMode }) => ({
    // backgroundColor:'#8B3B8F',
    // color: colorMode === 'light' ? 'inherit' : 'inherit',
    // transition:'background-color 1s linear',
    // _hover:{
    //   backgroundColor: 'red',
    // }
    color: "white",
    transition:'border 0.25s linear',
  }),
  variants: {
    solid: ({colorMode}) => ({
      bg: colorMode === 'light' ? '#0D74FF' : '#FF5430',
      _hover: {
        // bg: colorMode === 'light' ? '#FF5430' : '#0D74FF',
        bg: colorMode === 'light' ? '#44d8a4' : '#0D74FF',
      }
    }),
    ghost: ({colorMode}) => ({
      // color: colorMode === 'light' ? 'inherit' : '#DCE2FF',
      _hover: {
        bg: 'None',
        border: '2px solid #1C6FEB'
      }
    }),
  }
} as ComponentSingleStyleConfig;

export default Button;