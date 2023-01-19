import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { GTagManager } from 'components/google/GTagManager';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <GTagManager />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
