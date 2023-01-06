import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import {GTagManagerBody } from '../components/google/GTagManager'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <GTagManagerBody />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}