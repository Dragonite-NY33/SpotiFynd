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
import { useState, useEffect } from 'react';

function Vsbox(props) {
  console.log(props.data);
  return (
    <Grid templateColumns='repeat(2,1fr)' gap={100} mt={'50px'}>
      <GridItem borderRadius='lg'>
        <Musiccard
          title={props.data[0].title}
          album={props.data[0].album}
          desc={props.data[0].artists[0]}
          preview_url='https://p.scdn.co/mp3-preview/df0bd62bd0c37b37bd3f0656ec1b58a59d039aed?cid=774b29d4f13844c495f206cafdad9c86'
        />
      </GridItem>
      <GridItem borderRadius='lg'>
        <Musiccard
          title={props.data[1].title}
          album={props.data[1].album}
          desc={props.data[1].artists[0]}
          preview_url='https://p.scdn.co/mp3-preview/8513b15fb5b39966d8eccaa7b8c050c7a570e6e8?cid=774b29d4f13844c495f206cafdad9c86'
        />
      </GridItem>
    </Grid>
  );
}

export default Vsbox;
