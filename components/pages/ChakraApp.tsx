import { ChakraProvider } from '@chakra-ui/react';
import type { FC } from 'react';
import theme from 'styles/theme';

interface Props {
  children: React.ReactNode;
}

const ChakraApp: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ChakraApp;
