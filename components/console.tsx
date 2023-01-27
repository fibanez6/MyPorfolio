import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const options = {
  strings: [
    '`fernando@ibanez: ~$ `init',
    '`fernando@ibanez: ~$ `echo "$USER"\n' +
      '`Fernando Ibanez`\n' +
      '`fernando@ibanez: ~$ `line 1\n' +
      '`fernando@ibanez: ~$ `line 2\n' +
      '`fernando@ibanez: ~$ `line 3\n' +
      '`fernando@ibanez: ~$ `line 4\n' +
      '`fernando@ibanez: ~$ `line 5\n' +
      '&nbsp'
  ],
  typeSpeed: 50,
  backSpeed: 0
};

const Console = (): ReactElement => {
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    let typed: Typed;
    if (el.current) {
      typed = new Typed(el.current, options);
    }

    return () => {
      typed?.destroy();
    };
  }, []);
  return (
    <div className="type-wrap">
      {/* <span>fernando@ibanez: ~$ </span> */}
      <span style={{ whiteSpace: 'pre' }} ref={el} />
    </div>
  );
};

export default Console;
