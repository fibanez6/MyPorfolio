'use client';

import 'styles/globals.scss';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import theme from 'styles/theme/theme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
