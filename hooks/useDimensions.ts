import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';
import type { Dimensions } from 'types/hooks/Dimensions';

const useDimensions = (
  targetRef: MutableRefObject<HTMLElement | null>
): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0
  });

  const handleResize = (): void => {
    setDimensions({
      width: targetRef?.current ? targetRef.current.offsetWidth : 0,
      height: targetRef?.current ? targetRef.current.offsetHeight : 0
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    return (): void => window?.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return dimensions;
};

export default useDimensions;
