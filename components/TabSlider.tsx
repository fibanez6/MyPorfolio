'use client';

import { cx } from '@chakra-ui/shared-utils';
import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/system';
import { chakra, forwardRef, useStyleConfig } from '@chakra-ui/system';

export interface TabSliderProps
  extends HTMLChakraProps<'span'>,
    ThemingProps<'TabSlider'> {}

export const TabSlider = forwardRef<TabSliderProps, 'span'>((props, ref) => {
  const { className, variant, ...rest } = props;
  const styles = useStyleConfig('TabSlider', { variant });

  return (
    <chakra.span
      ref={ref}
      className={cx('fibanez-tabSlider', props.className)}
      __css={styles}
      {...rest}
    />
  );
});

export default TabSlider;
