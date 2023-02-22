import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';

export interface FlyThroughSceneProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Container'> {
  words: string[];
  minDuration: number;
  maxDuration: number;
}

export interface FlyThroughTextProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Container'> {
  delay?: number;
  duration: number;
  getTransition: () => TextTransition;
}

export interface Motion3d {
  x: string | number;
  y: string | number;
  z: string | number;
}

export interface TextTransition {
  start: Motion3d;
  end: Motion3d;
}
