import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Spacer,
  Button,
} from '@chakra-ui/react';
import Vsbox from '../Components/Vsbox';
import React, { useState } from 'react';

function Playgame() {
  const [score, setScore] = useState(0);

  return (
    <Box bg='#222326' mr='50px' ml='50px' h={'100vh'}>
      <Flex direction={'column'} alignItems='center'>
        <Heading color='#2EB953'>SpotiFynd</Heading>
        <Heading mt='25px' color='#2EB953'>
          Score: {score}
        </Heading>
      </Flex>
      <VStack align='stretch' mr={'250px'} ml={'250px'} spacing='24px'>
        <Vsbox />
      </VStack>

      <Flex direction={'column'} alignItems='center' mt='100'>
        <Heading color='#2EB953'>Song B's plays are:</Heading>
        <HStack mt='50' spacing='24px'>
          <Box
            as='button'
            borderRadius='lg'
            bg='#2EB953'
            color='black'
            p={4}
            fontSize='6xl'
          >
            Higher
          </Box>
          <Box
            as='button'
            borderRadius='lg'
            bg='#2EB953'
            color='black'
            p={4}
            fontSize='6xl'
          >
            Lower
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Playgame;
