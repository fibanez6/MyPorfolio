import { Box, Flex, Text, useToken } from '@chakra-ui/react';
import useTyped from 'hooks/useTyped';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import Moment from 'react-moment';

const data = (bashColor: string): string =>
  `<span style="color:${bashColor}">$ whoami</span>\n` +
  '`Fernando Ibanez`\n' +
  `<span style="color:${bashColor}">$ echo "USER_ROLE"</span>\n` +
  '`Software Engineer`\n' +
  `<span style="color:${bashColor}">$ echo "USER_EDUCATION"</span>\n` +
  '`- MSc. in Artificial Intelligence - Universidad Politécnica de Madrid - Spain`\n' +
  "`- Bachelor's Degree in Computer Science - Universidad Politécnica de Madrid - Spain`\n" +
  `<span style="color:${bashColor}">$ echo "USER_LOCATION"</span>\n` +
  '`Melbouner, Australia`\n' +
  `<span style="color:${bashColor}">$ echo "USER_INTEREST"</span>\n` +
  '`Passionate about new technologies, European football (soccer) and\n' +
  'traveling around the world to learn about other cultures and foods.`\n' +
  `<span style="color:${bashColor}">$ </span>`;

const Laptop = (): ReactElement => {
  const terminalRef = useRef<HTMLParagraphElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [bashColor] = useToken('colors', ['bash']);

  const about = data(bashColor);

  useTyped(terminalRef, {
    strings: [about],
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
          fontWeight="semibold"
          fontSize="1.5vmin"
        >
          <Moment format="ddd D MMM">{new Date()}</Moment>
        </Flex>
        <Box pt="4%" maxH="100%">
          <Text
            fontSize="0.6vmin"
            whiteSpace="pre"
            fontFamily="monospace"
            color={bashColor}
            pb="4%"
          >
            {`__        __   _
\\ \\      / /__| | ___ ___  _ __ ___   ___
 \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_  ' _ \\ / _ \\
  \\ V  V /  __/ | (_| (_) | | | | | |  __/
   \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|`}
          </Text>
          <Box lineHeight={{ base: 0.5, sm: 1, md: 1.5 }}>
            <Text
              as="span"
              fontSize="1.2vmin"
              whiteSpace="pre"
              lineHeight="5px"
              ref={terminalRef}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Laptop;
