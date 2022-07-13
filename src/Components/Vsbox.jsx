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
        <Musiccard title='Trust' album='https://i.scdn.co/image/ab67616d0000b273bf3e522cd3fed64ae064095f' desc='Brent Faiyaz' preview_url='https://p.scdn.co/mp3-preview/df0bd62bd0c37b37bd3f0656ec1b58a59d039aed?cid=774b29d4f13844c495f206cafdad9c86'/>
      </GridItem>
      <GridItem borderRadius='lg'>
        <Musiccard title='Me Porto Bonito' album='https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72' desc='Bad Bunny' preview_url='https://p.scdn.co/mp3-preview/8513b15fb5b39966d8eccaa7b8c050c7a570e6e8?cid=774b29d4f13844c495f206cafdad9c86'/>
      </GridItem>
    </Grid>
  );
}

export default Vsbox;
