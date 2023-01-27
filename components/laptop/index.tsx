import { Box, Flex, Text } from '@chakra-ui/react';
import useTyped from 'hooks/useTyped';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import type { TypedOptions } from 'typed.js';

const options: TypedOptions = {
  strings: [
    'Some <i>strings</i> are slanted',
    'Some <strong>strings</strong> are bold',
    'HTML characters &times; &copy;'
  ],
  typeSpeed: 50,
  backSpeed: 50
};

const Laptop = (): ReactElement => {
  const terminalRef = useRef<HTMLParagraphElement>(null);
  useTyped(terminalRef, options);
  return (
    <Flex flexDir="column" position="relative" maxW={1000} maxH={1000}>
      <Image src="/media/laptop.svg" alt="unibody" width={1000} height={1000} />
      <Box
        position="absolute"
        right="12.5%"
        top="7.5%"
        color="white"
        w="74.3%"
        maxH={5}
      >
        <Flex justifyContent="flex-end">
          <Text
            fontFamily="sans-serif"
            fontWeight="semibold"
            fontSize="1.5vmin"
          >
            Fri 27 Jan <span>13:27</span>
          </Text>
        </Flex>
        <Flex pt="4%">
          <Text fontSize="1.7vmin" ref={terminalRef} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Laptop;
