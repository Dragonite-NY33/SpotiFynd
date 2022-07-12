import {
  Box,
  Heading,
  Text,
  HStack,
  Spacer,
  Flex,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import Musiccard from './Musiccard';

function Vsbox(props) {
  return (
    // <HStack mt={'50px'} spacing='24px'>
    //   <Box>
    //     <Musiccard title='First Track' desc='WhatEver' />
    //   </Box>
    //   {/* <Spacer /> */}
    //   <Box>
    //     <Musiccard title='Second Track' desc='WhatEver' />
    //   </Box>
    // </HStack>
    <Grid templateColumns='repeat(2,1fr)' gap={100} mt={'50px'}>
      <GridItem borderRadius='lg'>
        <Musiccard title='First Track' desc='WhatEver' />
      </GridItem>
      <GridItem borderRadius='lg'>
        <Musiccard title='First Track' desc='WhatEver' />
      </GridItem>
    </Grid>
  );
}

export default Vsbox;
