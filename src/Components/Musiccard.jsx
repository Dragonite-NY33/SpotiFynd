import { Box, Heading, Text } from '@chakra-ui/react';

function Musiccard(props) {
  return (
    <Box
      minH='lg'
      minW='lg'
      p={5}
      shadow='md'
      borderWidth='1px'
      borderRadius='lg'
    >
      <Heading color='#2EB953' fontSize='xl'>
        {props.title}
      </Heading>
      <Text color='#2EB953' mt={4}>
        {props.desc}
      </Text>
    </Box>
  );
}

export default Musiccard;
