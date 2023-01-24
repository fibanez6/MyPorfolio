import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/400.css';

import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import colors from './color';
import components from './components';

const theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          color: 'gray.800',
          bg: 'whiteAlpha.900',
          lineHeight: 'base',
          _dark: {
            color: 'whiteAlpha.900',
            bg: 'gray.800'
          }
        },
        nav: {
          color: 'whiteAlpha.900',
          fontWeight: 'extrabold',
          lineHeight: '1.5',
          letterSpacing: '2px'
        },
        input: {
          _placeholder: {
            color: 'gray.900'
          }
        },
        textArea: {
          _placeholder: {
            color: 'gray.900'
          },
          _dark: {
            borderColor: 'gray.400'
          }
        }
      }
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
