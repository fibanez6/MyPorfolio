'use client';

import 'styles/globals.scss';

import ChakraApp from 'components/app/ChakraApp';
import { GTagManager } from 'components/google/GTagManager';
import seoData from 'content/seo-data.json';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import type { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      {/* HEAD */}
      <NextSeo {...seoData} useAppDir={false} />
      <GTagManager />

      {/* BODY */}
      <ChakraApp>
        <Component {...pageProps} />
      </ChakraApp>
    </>
  );
}
