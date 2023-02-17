import { useEffect, useState } from 'react';
import type { Dimensions } from 'types/hooks/Dimensions';

const useWindowDimension = (): Dimensions => {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
    width: 0,
    height: 0
  });
  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default useWindowDimension;
