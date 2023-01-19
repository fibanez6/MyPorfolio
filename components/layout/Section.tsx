import { Center, Heading, Stack } from '@chakra-ui/react';
import { cx } from '@chakra-ui/shared-utils';
import {
  forwardRef,
  omitThemingProps,
  useStyleConfig
} from '@chakra-ui/system';
import { motion } from 'framer-motion';
import { SectionProps } from 'types/components/layout';

export const Section = forwardRef<SectionProps, 'section'>((props, ref) => {
  const { className, title, children, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig('Section', props);

  return (
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
      <Stack
        as="section"
        className={cx('fibanez-section', className)}
        ref={ref}
        p={'3rem 0'}
        {...rest}
        __css={{
          ...styles,
          maxWidth: '100%'
        }}
      >
        {title && (
          <Center pb={10}>
            <Heading fontSize="3xl">{title}</Heading>
          </Center>
        )}
        {children}
      </Stack>
    </motion.div>
  );
});

Section.displayName = 'Section';
