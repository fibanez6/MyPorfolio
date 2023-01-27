import type { MutableRefObject } from 'react';
import { useEffect } from 'react';
import type { TypedOptions } from 'typed.js';
import Typed from 'typed.js';

const useTyped = (
  typedRef: MutableRefObject<HTMLParagraphElement | null>,
  options: TypedOptions
): void => {
  useEffect(() => {
    let typed: Typed;
    if (typedRef.current) {
      typed = new Typed(typedRef.current, options);
    }

    return () => {
      typed?.destroy();
    };
  }, [typedRef, options]);
};

export default useTyped;
