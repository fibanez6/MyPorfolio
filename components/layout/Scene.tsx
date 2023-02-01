import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import type { SceneProps } from 'types/components/layout/scene';

const Scene = ({ children, ...rest }: SceneProps): ReactElement => (
  <motion.div viewport={{ amount: 'all' }} {...rest}>
    {children}
  </motion.div>
);

export default Scene;
