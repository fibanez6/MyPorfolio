import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/400.css';

import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

import colors from './color';
import components from './components';

const theme = extendTheme(
  {
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('whiteAlpha.900', 'gray.800')(props),
          lineHeight: 'base'
        },
        nav: {
          color: 'whiteAlpha.900',
          fontWeight: 'extrabold',
          lineHeight: '1.5',
          letterSpacing: '2px'
        }
      })
    },
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`
    },
    components,
    colors
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
);

export default theme;
