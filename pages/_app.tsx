'use client';

import 'styles/globals.scss';

import { ChakraProvider } from '@chakra-ui/react';
import { GTagManager } from 'components/google/GTagManager';
import seoData from 'content/seo-data.json';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { ReactElement } from 'react';
import theme from 'styles/theme/theme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      {/* HEAD */}
      <NextSeo {...seoData} useAppDir={false} />
      <GTagManager />

      {/* BODY */}
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
