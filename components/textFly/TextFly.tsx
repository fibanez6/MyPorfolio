import type {
  ChakraProps,
  HTMLChakraProps,
  ThemingProps
} from '@chakra-ui/react';
import { Box, omitThemingProps, Text } from '@chakra-ui/react';
import { forwardRef, useStyleConfig } from '@chakra-ui/system';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import type {
  Motion3d,
  TextTransition
} from 'types/components/textFly/TextFly';
import { shallowEqual } from 'utils/object';

interface TextFlyProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Container'> {
  delay?: number;
  duration: number;
  getTransition: () => TextTransition;
}

const innerStyle: ChakraProps = {
  position: 'absolute',
  transform: 'translateZ(0)',
  transformOrigin: 'center'
};

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

const TextFly = forwardRef<TextFlyProps, 'div'>((props, ref) => {
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

  // console.log('rendered flyText'); // TODO

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
        ...innerStyle,
        ...styles
      }}
      {...rest}
      top={`${transition.start.y}px`}
      left={`${transition.start.x}px`}
    >
      <AnimatePresence>
        <motion.div
          animate={controls}
          variants={variant}
          transition={{
            delay,
            duration,
            // repeat: Infinity,
            ease: [0.2, 0.4, 1, 0]
          }}
        >
          <Text fontSize={15}>{children}</Text>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
});

export default TextFly;
