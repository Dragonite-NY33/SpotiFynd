import { Container, Box, Flex, Center, Heading, Text } from '@chakra-ui/react';
import Leaderboard from '../Components/Leaderboard';
import Navbar from '../Components/Navbar';

function Gameresults() {
  return (
    <Box bg='rgb(192,227,193)' h={'100vh'}>
      <Navbar></Navbar>
      {/* <Box bg='#222326'>
        <Flex direction={'column'} alignItems='center' py='5'>
          <Heading color='#2EB953'>SpotiFynd</Heading>
        </Flex>
      </Box> */}
      <Flex
        direction={'column'}
        alignItems='center'
        justifyItems={'center'}
        // bg='lightyellow'
        // h={'100vh'}
        mt='50'
      >
        <Heading>Leaderboard</Heading>
        <Leaderboard></Leaderboard>
      </Flex>
    </Box>
  );
}

export default Gameresults;
