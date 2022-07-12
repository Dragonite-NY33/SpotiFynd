import { Box, Heading, Text, HStack, Spacer, Flex } from '@chakra-ui/react';
import Musiccard from './Musiccard';

function Vsbox(props) {
  return (
    <Flex mt={'150px'}>
      <Box>
        <Musiccard title='First Track' desc='WhatEver' />
      </Box>
      <Spacer />
      <Box>
        <Musiccard title='Second Track' desc='WhatEver' />
      </Box>
      {/* <Musiccard /> */}
    </Flex>
  );
}

export default Vsbox;
