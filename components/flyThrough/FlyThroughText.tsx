import {
  Box,
  forwardRef,
  omitThemingProps,
  Text,
  useStyleConfig
} from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import type {
  FlyThroughTextProps,
  Motion3d,
  TextTransition
} from 'types/components/flyThrough/FlyThrough';
import { shallowEqual } from 'utils/object';

const variant = {
  visible: ({ x, y, z }: Motion3d) => ({
    opacity: [0.2, 0.6, 0],
    x,
    y,
    z,
    scale: [0.8, 5],
    perspective: '2000px'
  }),
  hidden: () => ({
    x: '0px',
    y: '0px',
    z: '0px',
    opacity: 1,
    perspective: '0px'
  })
};

const FlyThroughText = forwardRef<FlyThroughTextProps, 'div'>((props, ref) => {
  const {
    children,
    delay = 0,
    duration = 0,
    getTransition,
    ...rest
  } = omitThemingProps(props);
  const styles = useStyleConfig('div', props);
  const [transition, setTransition] = useState<TextTransition>(getTransition());
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set('hidden');
    controls
      .start(variant.visible(transition.end))
      .then(() => {
        // animation has completed, getting a new transition from parent
        let nextTransition = getTransition();
        while (shallowEqual(transition.start, nextTransition.start)) {
          nextTransition = getTransition();
        }
        setTransition(nextTransition);
      })
      .catch((err) => console.log(err));
  }, [transition]);

  return (
    <Box
      ref={ref}
      __css={{
        position: 'absolute',
        transform: 'translateZ(0)',
        transformOrigin: 'center',
        ...styles
      }}
      top={`${transition.start.y}px`}
      left={`${transition.start.x}px`}
      {...rest}
    >
      <AnimatePresence>
        <motion.div
          animate={controls}
          variants={variant}
          transition={{
            delay,
            duration,
            ease: [0.2, 0.4, 1, 0]
          }}
        >
          <Text fontSize={15}>{children}</Text>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
});

export default FlyThroughText;
