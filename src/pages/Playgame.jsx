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
  Stack,
} from '@chakra-ui/react';
import Vsbox from '../Components/Vsbox';
import Navbar from '../Components/Navbar';
import Flipcard from '../Components/Flipcard';
import React, { useState } from 'react';

function Playgame() {
  const [score, setScore] = useState(0);

  return (
    <Box bg='#222326' minH='100vh' minW='100vw'>
      <Navbar></Navbar>
      <Flex direction={'column'} alignItems='center'>
        {/* <Heading color='#2EB953'>SpotiFynd</Heading> */}
        <Heading mt='25px' color='#2EB953'>
          Score: {score}
        </Heading>
      </Flex>

      <VStack align='center' w={'100%'}>
        <Vsbox />
      </VStack>

      <Heading mt={50} textAlign={'center'} color='#2EB953'>
        Song B's plays are:
      </Heading>

      <Stack
        spacing='400px'
        justify={'center'}
        direction={['row']}
        m={25}
        // bg='red'
      >
        <Box
          as='button'
          borderRadius='lg'
          bg='#2EB953'
          color='black'
          p={4}
          fontSize='4xl'
        >
          Higher
        </Box>
        <Box
          as='button'
          borderRadius='lg'
          bg='#2EB953'
          color='black'
          p={4}
          fontSize='4xl'
        >
          Lower
        </Box>
      </Stack>
      {/* <Flex direction={'column'} alignItems='center' mt={50}>
        <HStack spacing='24px'>
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
      </Flex> */}
      <Center>{/* <Flipcard /> */}</Center>
    </Box>
  );
}

export default Playgame;
