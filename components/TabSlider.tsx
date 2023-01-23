'use client';

import { cx } from '@chakra-ui/shared-utils';
import { chakra, forwardRef, useStyleConfig } from '@chakra-ui/system';
import type { TabSliderProps } from 'types/components/tabSlider';

const TabSlider = forwardRef<TabSliderProps, 'span'>((props, ref) => {
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
