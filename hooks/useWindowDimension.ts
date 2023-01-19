import { useEffect, useState } from 'react';

interface WindowDimentions {
  width: number | undefined;
  height: number | undefined;
}

const useWindowDimension = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined
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
