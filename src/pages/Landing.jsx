import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Link,
  Button,
  Input,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useState, useEffect } from 'react'

function Landing() {
  const [gameMode, setGameMode] = useState('userSongs');
  const [isLoggedIn, setLogin] = useState(false);
  const [proPicURL, setProfilePic] = useState('');

  return (
    <Box
      h='100vh'
      w='100vw'
      bg='rgb(192,227,193)'
      // bgGradient={'url("https://st.depositphotos.com/11618436/57576/v/600/depositphotos_575764140-stock-video-question-mark-particle-figure-icon.mp4")'}
      // bgGradient={
      //   'url("data:image/jpeg;base64,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")'
      // }
    >
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} proPicURL={proPicURL} setProfilePic={setProfilePic}></Navbar>
      <Center mt='200' fontSize='2xl'>
        Choose your game mode, or else 😈
      </Center>
      <Center fontSize='2xl'>
        <input type='radio' id='standard' name='mode' value='userSongs' onChange={e => setGameMode(e.target.value)}/>
        <label for="standard">Standard</label><br></br>
        <input type='radio' id='charts' name='mode' value='playlistSongs' onChange={e => setGameMode(e.target.value)}/>
        <label for="charts">Charts</label><br></br>
        <input type='radio' id='mixed' name='mode' value='mixedSongs' onChange={e => setGameMode(e.target.value)}/>
        <label for="mixed">Mixed</label><br></br>
      </Center>
      <Flex justify={'center'} mt='25'>
      <RouterLink   
        to={"/playgame"}
        state={{
          gameMode: gameMode,
          isLoggedIn: isLoggedIn,
          proPicURL: proPicURL
          }}>
          <Button px='12' py='10' bg='rgb(39,42,54)' color='rgb(27,215,96)'>
            Start Game
          </Button>
        </RouterLink>
      </Flex>

      <Center mt='100' fontSize='2xl'>
        Which song is more popular?
      </Center>
      <Center fontSize='2xl'>
        If you don't recognize the song, hover for a sample!
      </Center>
      <Center mt='250' fontSize='1xl'>
      Nothing contained in this website shall be deemed or construed to create a partnership, joint venture or other affiliation between SpotiFynd and Spotify or between SpotiFynd and any other entity or party, 
      or cause SpotiFynd to be responsible in any way for the debts or obligations of Spotify or any other party or entity.
      </Center>
    </Box>
  );
}

export default Landing;
