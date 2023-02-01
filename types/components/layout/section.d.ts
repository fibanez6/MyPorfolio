import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import type { VisualViewport } from 'framer-motion';

export interface SectionLayoutProps
  extends HTMLChakraProps<'section'>,
    ThemingProps<'Container'> {
  title?: string;
}
export interface SectionProps extends SectionLayoutProps {
  onViewportEnter?: VisualViewport;
  withMotion?: boolean;
}
