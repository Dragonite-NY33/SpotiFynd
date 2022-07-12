import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <Box color='rgb(27,215,96)' bg='rgb(39,42,54)' py='5'>
        <Center>
          <Flex direction={'column'}>
            <Heading>SpotiFynd</Heading>
          </Flex>
        </Center>
      </Box>
      <Center>
        <RouterLink to='Playgame'>
          <Button px='12' py='10' mt='260' borderColor='red'>
            Start Game
          </Button>
        </RouterLink>
      </Center>
      <Center mt='100'>It's a game that obviously doesn't use Spotify</Center>
    </div>
  );
}

export default Landing;
