import { Box, forwardRef, omitThemingProps } from '@chakra-ui/react';
import useDimensions from 'hooks/useDimensions';
import { useMemo, useRef } from 'react';
import type {
  FlyThroughSceneProps,
  Motion3d,
  TextTransition
} from 'types/components/flyThrough/FlyThrough';
import type { Dimensions } from 'types/hooks/Dimensions';
import type { Offsets } from 'types/hooks/Offsets';
import { getRandom, getRandomElement } from 'utils/random';

import FlyThroughText from './FlyThroughText';

const ROW_N = 10;
const COLUMN_N = 10;

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

const FlyThroughScene = forwardRef<FlyThroughSceneProps, 'div'>((props, _) => {
  const {
    words,
    minDuration = 4,
    maxDuration = 5,
    ...rest
  } = omitThemingProps(props);
  const targetRef = useRef(null);
  const grid = useDimensions(targetRef);

  const textTransitions = useMemo(() => {
    return grid.width !== 0 && grid.height !== 0 ? getTransitions(grid) : [];
  }, [grid]);

  const getTransition = (): TextTransition => {
    return getRandomElement(textTransitions);
  };

  return (
    <Box
      ref={targetRef}
      position="relative"
      overflow="hidden"
      minH="25rem"
      {...rest}
    >
      {textTransitions.length &&
        words.map((word, i) => (
          <FlyThroughText
            key={i}
            h={7}
            getTransition={getTransition}
            delay={i * 0.3}
            duration={getRandom(minDuration, maxDuration)}
          >
            {word}
          </FlyThroughText>
        ))}
    </Box>
  );
});

export default FlyThroughScene;
