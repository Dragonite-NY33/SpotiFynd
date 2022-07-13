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
          preview_url={props.data[0].previewUrl}
          popularity={props.data[0].popularity}
        />
      </GridItem>
      <GridItem borderRadius='lg'>
        <Musiccard
          title={props.data[1].title}
          album={props.data[1].album}
          desc={props.data[1].artists[0]}
          preview_url={props.data[1].previewUrl}
          popularity={props.data[1].popularity}
        />
      </GridItem>
    </Grid>
  );
}

export default Vsbox;
