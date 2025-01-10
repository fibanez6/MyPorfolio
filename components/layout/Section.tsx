import {
  Center,
  forwardRef,
  Heading,
  omitThemingProps,
  Stack,
  useStyleConfig
} from '@chakra-ui/react';
import { cx } from '@chakra-ui/utils';
import { motion } from 'framer-motion';
import type {
  SectionLayoutProps,
  SectionProps
} from 'types/components/layout/section';

const SectionLayout = forwardRef<SectionLayoutProps, 'div'>((props, ref) => {
  const { className, title, children, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig('div', props);

  return (
    <Stack
      className={cx('fibanez-section--layout', className)}
      ref={ref}
      __css={{
        ...styles,
        maxWidth: '100%'
      }}
      {...rest}
    >
      {title && (
        <Center pb={10}>
          <Heading fontSize="3xl" textTransform="capitalize">
            {title}
          </Heading>
        </Center>
      )}
      {children}
    </Stack>
  );
});

const Section = forwardRef<SectionProps, 'section'>((props, ref) => {
  const { id, className, onViewportEnter, withMotion, children, ...rest } =
    omitThemingProps(props);

  const classNames = `fibanez-section ${id ? 'fibanez-section--' + id : ''}`;

  return (
    <motion.section
      className={cx(classNames, className)}
      viewport={{ amount: 'all' }}
      onViewportEnter={onViewportEnter}
      ref={ref}
    >
      {withMotion ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0.1, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <SectionLayout id={id} pt={'5rem'} pb={'2rem'} {...rest}>
            {children}
          </SectionLayout>
        </motion.div>
      ) : (
        <SectionLayout id={id} {...rest}>
          {children}
        </SectionLayout>
      )}
    </motion.section>
  );
});

export default Section;
