import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';
import type { Offsets } from 'types/hooks/Offsets';

const useOffsets = (
  targetRef: MutableRefObject<HTMLElement | null>
): Offsets => {
  const [offsets, setOffsets] = useState<Offsets>({
    top: 0,
    left: 0
  });

  const handleResize = (): void => {
    setOffsets({
      top: targetRef?.current ? targetRef.current.offsetTop : 0,
      left: targetRef?.current ? targetRef.current.offsetLeft : 0
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    return (): void => window?.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return offsets;
};

export default useOffsets;
