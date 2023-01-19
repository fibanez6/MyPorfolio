'use client';

import {
  chakra,
  forwardRef,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps
} from '@chakra-ui/system';
import { cx } from '@chakra-ui/shared-utils';

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
