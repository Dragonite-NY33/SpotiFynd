import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';

function Musiccard(props) {
  const [isActive, setIsActive] = useState(true);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const track = {
    preview_url: props.preview_url,
    album: props.album,
  };

  const [audio, setAudio] = useState(null);
  const [fadeIn, setFadeIn] = useState(null);
  const [fadeOut, setFadeOut] = useState(null);

  const play = () => {
    if (audio || !track.preview_url) {
      return;
    }

    const newAudio = new Audio(track.preview_url);
    newAudio.volume = 0;

    newAudio.play().catch((error) => {
      console.log(error);
    });

    const timer = setInterval(() => {
      if (newAudio.volume < 0.5) {
        newAudio.volume = Number((newAudio.volume + 0.05).toFixed(2));
      } else if (fadeIn) {
        clearInterval(fadeIn);
      }
    }, 100);

    setFadeIn(timer);
    setAudio(newAudio);
  };

  const stop = () => {
    if (!audio) {
      return;
    }

    const originalVolume = audio.volume;

    setAudio(null);

    if (fadeIn) {
      clearInterval(fadeIn);
    }

    setFadeOut(
      setInterval(() => {
        if (audio.volume > 0) {
          audio.volume = Number((audio.volume - 0.05).toFixed(2));
        } else if (fadeOut) {
          clearInterval(fadeOut);
        }
      }, 100)
    );

    setTimeout(() => {
      audio.pause();
    }, (originalVolume / 0.05) * 100);
  };

  return (
    <Box
      className={isActive ? 'card' : 'card is-flipped'}
      onMouseOver={play}
      onMouseLeave={stop}
      h={'540px'}
      w={'540px'}
      p={5}
      //   shadow='md'
      borderWidth='.5px'
      borderRadius='lg'
      boxShadow='0px 0px 18px 11px #2EB953'
      onClick={handleClick}
      // _hover={{
      //   bg: 'white',
      //   boxShadow: '0px 0px 18px 11px #000000',
      //   transform: 'rotateY(0.5turn)',
      //   transition: '1s ease-in-out',
      // }}
    >
      <Box className='card__face card__face--front'>
        <Heading color='#2EB953' fontSize='xl'>
          {props.title}
        </Heading>
        <Image
          src={track.album}
          alt={'Hi'}
          h={'440px'}
          w={'440px'}
          borderRadius='lg'
          mt={15}
          align='center'
        />

        <Text color='#2EB953' mt={3}>
          {props.desc}
        </Text>
      </Box>
      <Box className='card__face card__face--back'>Back</Box>
    </Box>
  );
}

export default Musiccard;

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
