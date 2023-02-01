'use client';

import { Flex, Stack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import Particles from 'components/Particles';
import Image from 'next/image';
import type { ReactElement } from 'react';

const Hero = (): ReactElement => {
  const [isDesktop] = useMediaQuery('(min-width: 1060px)');

  return (
    <Flex w={'full'} h={'100vh'} position={'relative'}>
      <Image
        src={'/media/hero.webp'}
        fill
        alt="Hero section background"
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      {isDesktop && <Particles id="particles-js" />}
      <VStack
        w={'full'}
        justify={'center'}
        alignItems={{ base: 'center', md: 'end' }}
        px={{ base: '0rem', md: '5rem', lg: '10rem', xl: '15rem' }}
        bgGradient={'linear(to-r, blackAlpha.600,  rgba(142,225,255, 0.5))'}
        zIndex={10}
      >
        <Stack align={'flex-end'} spacing={6}>
          <Text
            color={'gray.100'}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}
            letterSpacing="0.2rem"
            textShadow={'4px 3px 0px #4A5568'}
          >
            Fernando Ibanez
          </Text>
          <Text
            color={'gray.100'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: 'lg', sm: '3xl', md: '4xl' }}
            letterSpacing="0.05rem"
            textShadow={'4px 3px 0px #4A5568'}
          >
            Software Engineer
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
