import { Box, Button } from '@chakra-ui/react';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { BeatLoader } from 'react-spinners';
import { fly, slideX, suspension } from 'styles/theme/frames';
import { Position, SubmitButtomProps } from 'types/components/form';
import { getRandom } from 'utils/random';

export const SubmitButtom = ({
  label,
  dodge,
  isSuccess,
  isLoading
}: SubmitButtomProps): ReactElement => {
  const buttomRef = useRef<HTMLButtonElement>();
  const [pos, setPos] = useState<Position>({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pos.x !== 0 || pos.y !== 0) {
      timer = setTimeout(() => {
        if (buttomRef.current) {
          buttomRef.current.style.transform = `translate(0px, 0px)`;
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, isSuccess, pos]);

  let posX: number;
  let posY: number;
  const dodgeMouse = (): void => {
    if (dodge) {
      posX ? (posX = 0) : (posX = getRandom(0, 300));
      posY ? (posY = 0) : (posY = getRandom(0, 300));
      setPos({ x: posX, y: posY });
      if (buttomRef.current) {
        buttomRef.current.style.transform = `translate(${-posX}px, ${-posY}px)`;
      }
    }
  };

  const renderInitButton = (): ReactElement => {
    return (
      <>
        <Box
          w="1.5em"
          _groupHover={{
            animation: `${suspension} 0.6s ease-in-out infinite alternate`
          }}
        >
          <Box
            transition="transform 0.3s ease-in-out"
            transform-origin="center center"
            _groupHover={{
              transform: 'translateX(1.2em) rotate(45deg) scale(1.1)'
            }}
            _groupActive={{
              transform: 'translateX(10em) scale(3)'
            }}
          >
            <FiSend size={20} />
          </Box>
        </Box>
        <Box
          as="span"
          ml="0.3em"
          transition="all 0.3s ease-in-out"
          _groupHover={{
            transform: 'translateX(5em)'
          }}
        >
          {label}
        </Box>
      </>
    );
  };

  const renderCallbackButton = (): ReactElement => {
    return (
      <>
        <Box
          as="span"
          ml="0.3em"
          transform="translateX(-7.5em) "
          transition="all 0.3s ease-in-out"
          animation={`${slideX} 0.5s ease-in-out normal forwards`}
        >
          {isSuccess ? 'Sent' : 'Failed'}
        </Box>
        <Box
          w="1.5em"
          transform="translateX(-6.5em) rotate(45deg) scale(1)"
          animation={`${fly} 0.5s ease-in-out normal forwards`}
        >
          <Box
            transition="transform 0.3s ease-in-out"
            transform-origin="center center"
          >
            <FiSend size={20} />
          </Box>
        </Box>
      </>
    );
  };

  const background = (): any => {
    if (!isLoading && isSuccess !== undefined) {
      return { bg: isSuccess ? 'tertiary.main' : 'secundary.main' };
    }
    return {};
  };

  return (
    <Button
      ref={buttomRef}
      aria-label="submit"
      {...background()}
      isLoading={isLoading}
      spinner={<BeatLoader size={8} color="white" />}
      variant="submit"
      type="submit"
      role="group"
      onMouseOver={dodgeMouse}
    >
      {isSuccess === undefined ? renderInitButton() : renderCallbackButton()}
    </Button>
  );
};
