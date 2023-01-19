'use client';

import { Box, Flex } from '@chakra-ui/react';
import TimelineRow from 'components/TimelineRow';
import { ReactElement } from 'react';
import { TimelineListProps } from 'types/components/Timeline';

const Timeline = ({ data }: TimelineListProps): ReactElement => {
  return (
    <Box className="container-timeline" p="1rem" maxHeight="100%">
      <Flex
        direction="column"
        position="relative"
        _after={{
          bg: 'linear-gradient(to top, rgba(134, 214, 243, 0) 0%, rgba(81, 106, 204, 1) 100%)',
          content: '""',
          left: '55px',
          width: '2px',
          top: 0,
          height: '100%',
          position: 'absolute'
        }}
      >
        {data.map((row, index, arr) => {
          return (
            <TimelineRow
              key={index}
              title={row.title}
              subtitle={row.subtitle}
              date={row.date}
              location={row.location}
              content={row.content}
              index={index}
              arrLength={arr.length}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Timeline;
