import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';

export interface SectionProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Container'> {
  title?: string;
}
