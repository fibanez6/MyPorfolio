'use client';

import './globals.scss';

import { ChakraProvider } from '@chakra-ui/react';
import { GTagManager } from 'components/google/GTagManager';
import theme from 'styles/theme/theme';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <GTagManager />
      <ChakraProvider theme={theme}>
        <body>{children}</body>
      </ChakraProvider>
    </html>
  );
}
