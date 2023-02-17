import { Box } from '@chakra-ui/react';
import TextFlys from 'components/textFly/TextFlys';
import type { ReactElement } from 'react';

const Test = (): ReactElement => {
  return (
    <Box h="95vh" w="100vw" position="relative">
      <TextFlys />
    </Box>
  );
};

export default Test;
