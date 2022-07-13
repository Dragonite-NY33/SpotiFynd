import {
  Box,
  Flex,
  Center,
  Heading,
  Button,
  SimpleGrid,
  Avatar,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <SimpleGrid color='rgb(27,215,96)' bg='rgb(39,42,54)' py='5' columns={3}>
      {/* <Avatar
        name='SpotiFynd'
        // src='https://thumbs.dreamstime.com/b/green-neon-question-mark-black-background-illustration-222851076.jpg'
        // src='https://t4.ftcdn.net/jpg/05/10/76/85/360_F_510768565_JYzrONykACo1MLytnxmp5XfM96TheaIV.jpg'
        ml='10'
      /> */}
      <Box></Box>
      <Flex justify='center'>
        <RouterLink to='/'>
          <Heading>SpotiFynd</Heading>
        </RouterLink>
      </Flex>
      <Flex justify='right' mr='10'>
        <Button color='rgb(39,42,54)' bg='rgb(27,215,96)'>
          Login
        </Button>
      </Flex>
    </SimpleGrid>
  );
}

export default Navbar;
