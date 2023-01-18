'use client';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import Particles from "../components/Particles";

const HeroSection = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="hero" className="section-hero">
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(./media/hero.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        position={"relative"}
        zIndex={10}
        >
        {isDesktop && 
          <Particles id="particles-js" /> 
        }
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600,  rgba(142,225,255, 0.5))'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </section>
  )
}

export default HeroSection;