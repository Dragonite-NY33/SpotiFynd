import { Container, Box, Flex, Center, Heading, Text } from '@chakra-ui/react';

function Gameresults() {
  return (
    <Box bg='#222326' h={'100vh'}>
      <Flex direction={'column'} alignItems='center'>
        <Heading color='#2EB953'>SpotiFynd</Heading>
        <Heading color='#2EB953' mt={50}>
          LeaderBoard
        </Heading>
      </Flex>

      <Flex direction={'column'} alignItems='center' mt='100'></Flex>
    </Box>
  );
}

export default Gameresults;
