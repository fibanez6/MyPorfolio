import type { MotionProps } from 'framer-motion';

export type SceneProps = MotionProps & {
  children: React.ReactNode;
};
