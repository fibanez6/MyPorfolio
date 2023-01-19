import { keyframes } from '@emotion/react';

export const jello = keyframes`
      0% { transform: scale3d(1, 1, 1); }
      30% { transform: scale3d(1.25, 0.75, 1); }
      40% { transform: scale3d(0.75, 1.25, 1); }
      50% { transform: scale3d(1.15, 0.85, 1); }
      65% { transform: scale3d(0.95, 1.05, 1); }
      75% { transform: scale3d(1.05, 0.95, 1); }
      100% { transform: scale3d(1, 1, 1); }
`;

export const suspension = keyframes`
      from {transform: translateY(0.1em);}
      to {transform: translateY(-0.1em)}
`;

export const fly = keyframes`
      from {transform: translateX(-6.5m) rotate(45deg) scale(1);}
      to {transform: translateX(3em) rotate(45deg) scale(1.3)}
`;

export const slideX = keyframes`
    from {transform: translateX(-7.5em);}
    to {transform: translateX(0.5em)}
`;
