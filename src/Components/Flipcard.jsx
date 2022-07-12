import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';

function Flipcard(props) {
  const [isActive, setIsActive] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
    console.log('hi');
  };

  return (
    <Box
      className={isActive ? 'card' : 'card is-flipped'}
      h={'540px'}
      w={'540px'}
      p={5}
      //   shadow='md'
      borderWidth='.5px'
      borderRadius='lg'
      boxShadow='0px 0px 18px 11px #2EB953'
      //   _hover={{
      //     bg: 'white',
      //     boxShadow: '0px 0px 18px 11px #000000',
      //     transform: 'rotateY(0.5turn)',
      //     transition: '1s ease-in-out',
      //   }}
      onClick={handleClick}
    >
      <Heading className='card__face card__face--front'>Front</Heading>
      <Heading className='card__face card__face--back'>Back</Heading>
      {/* <Heading color='#2EB953' fontSize='xl'>
        {props.title}
      </Heading>
      <Image
        src={
          'https://video-images.vice.com/_uncategorized/1527898271751-0bffd93463afe53e7f651f72bedfc78b1000x1000x1.jpeg?resize=640:*'
        }
        alt={'Hi'}
        h={'440px'}
        w={'440px'}
        borderRadius='lg'
        mt={15}
        align='center'
      />

      <Text color='#2EB953' mt={3}>
        {props.desc}
      </Text> */}
    </Box>
  );
}

export default Flipcard;

// [{
//     title: "Hold My Liquor"
//     popularity: 66
//     artists: [
//                 {
//                     name: "Kanye West"
//                 }
//             ]
//     album: "https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9"
// }]
