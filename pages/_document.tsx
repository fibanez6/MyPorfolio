import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { DEFAULT_LOCALE } from 'utils/constants';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang={DEFAULT_LOCALE}>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
