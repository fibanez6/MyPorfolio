import type { ChakraProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { SKILLS } from 'content/profile-data';
import useDimensions from 'hooks/useDimensions';
import type { ReactElement } from 'react';
import { useMemo, useRef } from 'react';
import type {
  Motion3d,
  TextTransition
} from 'types/components/textFly/TextFly';
import type { Dimensions } from 'types/hooks/Dimensions';
import type { Offsets } from 'types/hooks/Offsets';
import { getRandom, getRandomElement } from 'utils/random';

import TextFly from './TextFly';

const COLORS = ['#aec1d2', '#F5F5DC', '#A52A2A', '#6495ED', '#FF1493'];
const ROW_N = 10;
const COLUMN_N = 10;
const REPEAT_TIMES = 1;
const MIN_DURATION = 4;
const MAX_DURATION = 5;

const style: ChakraProps = {
  minH: '25rem',
  backgroundColor: '#eaeaea',
  position: 'relative',
  overflow: 'hidden'
};

const getTransitions = (grid: Dimensions): TextTransition[] => {
  const rowSize = grid.width / ROW_N;
  const columnSize = grid.height / COLUMN_N;
  const numRows = ROW_N - 2;
  const numColums = COLUMN_N - 2;
  const textTransitions = [...Array(numRows * numColums)].map((_, i) => {
    const left = rowSize + Math.floor(i / numRows) * rowSize;
    const top = columnSize + (i % numRows) * columnSize;
    const quadrant = getQuadrant(grid, { left, top });
    const end = getMotionDestination(quadrant);
    return {
      start: { x: left, y: top, z: 0 },
      end
    };
  });
  return textTransitions;
};

const getQuadrant = (grid: Dimensions, cell: Offsets): number => {
  const axisX = grid.width / 2;
  const axisY = grid.height / 2;
  const delta = 50;
  if (cell.left <= axisX - delta) {
    return cell.top <= axisY ? 1 : 3;
  } else {
    return cell.top <= axisY - delta ? 2 : 4;
  }
};

const getMotionDestination = (quadrant: number): Motion3d => {
  const destZ = getRandom(100, 600);
  switch (quadrant) {
    case 1:
      return { x: '-400%', y: '-400%', z: `${destZ}px` };
    case 2:
      return { x: '400%', y: '-400%', z: `${destZ}px` };
    case 3:
      return { x: '-400%', y: '400%', z: `${destZ}px` };
    default:
      return { x: '400%', y: '400%', z: `${destZ}px` };
  }
};

const TextFlys = (): ReactElement => {
  const targetRef = useRef(null);
  const grid = useDimensions(targetRef);
  const totalELt = SKILLS.length * REPEAT_TIMES;

  const textTransitions = useMemo(() => {
    return grid.width !== 0 && grid.height !== 0 ? getTransitions(grid) : [];
  }, [grid]);

  const getTransition = (): TextTransition => {
    return getRandomElement(textTransitions);
  };

  return (
    <Box ref={targetRef} {...style}>
      {textTransitions.length &&
        [...Array(totalELt)].map((_, i) => (
          <TextFly
            key={i}
            backgroundColor={COLORS[i % COLORS.length]}
            h={7}
            getTransition={getTransition}
            delay={i * 0.3}
            duration={getRandom(MIN_DURATION, MAX_DURATION)}
          >
            {SKILLS[i % SKILLS.length]}
          </TextFly>
        ))}
    </Box>
  );
};

export default TextFlys;
