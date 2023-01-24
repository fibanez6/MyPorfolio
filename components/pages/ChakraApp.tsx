import { ChakraProvider } from '@chakra-ui/react';
import type { ReactElement, ReactNode } from 'react';
import theme from 'styles/theme';

const StyledApp = ({ children }: { children: ReactNode }): ReactElement => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
);

export default StyledApp;
