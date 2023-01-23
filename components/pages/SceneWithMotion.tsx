import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import type { SceneProps } from 'types/pages/home';

const SceneWithMotion = ({ children, ...rest }: SceneProps): ReactElement => (
  <motion.div viewport={{ amount: 'all' }} {...rest}>
    {children}
  </motion.div>
);

export default SceneWithMotion;
