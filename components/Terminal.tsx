'use client';

import { Box, Flex, Text, useToken } from '@chakra-ui/react';
import useTyped from 'hooks/useTyped';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import Moment from 'react-moment';

const Terminal = ({ data }: { data: string[] }): ReactElement => {
  const terminalRef = useRef<HTMLParagraphElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [bashColor] = useToken('colors', ['bash']);

  useTyped(terminalRef, {
    strings: data,
    typeSpeed: 10
  });
  return (
    <Flex
      flexDir="column"
      position="relative"
      w="100%"
      maxH="600px"
      ref={windowRef}
    >
      <Image src="/media/laptop.svg" alt="unibody" width={1024} height={600} />
      <Box position="absolute" right="12.5%" top="7.5%" color="white" w="74.3%">
        <Flex
          justifyContent="flex-end"
          fontFamily="sans-serif"
          fontWeight="medium"
          fontSize={{ base: '1.2vmin', xl: '1.1vmin' }}
        >
          <Moment format="ddd D MMM">{new Date()}</Moment>
        </Flex>
        <Box pt="4%" maxH="100%">
          <Text
            fontSize="0.6vmin"
            whiteSpace="pre"
            fontFamily="monospace"
            color={bashColor}
            pb="3.3%"
          >
            {`__        __   _
\\ \\      / /__| | ___ ___  _ __ ___   ___
 \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_  ' _ \\ / _ \\
  \\ V  V /  __/ | (_| (_) | | | | | |  __/
   \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|`}
          </Text>
          <Box
            lineHeight={{
              base: '1.3vmin',
              md: '2.1vmin',
              xl: '1.75vmin'
            }}
          >
            <Text
              as="span"
              fontSize={{ base: '1.3vmin', xl: '1.15vmin' }}
              whiteSpace="pre"
              ref={terminalRef}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Terminal;
