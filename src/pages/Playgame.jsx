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
import React, { useState, useEffect } from 'react';
import {
  useLocation,
  Navigate,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
// import { Redirect } from 'react-router';

function Playgame() {
  const [score, setScore] = useState(0);

  const [songList, setSongList] = useState([]);

  // const [songOne, setSongOne] = useState({});
  // const [songTwo, setSongTwo] = useState({});

  const navigate = useNavigate();

  const gameMode = useLocation().state.gameMode;
  console.log('game mode: ', gameMode);
  // console.log('Is logged in persisting?', useLocation().state.isLoggedIn);
  const isLoggedIn = useLocation().state.isLoggedIn;
  // console.log('Is proPicURL persisting?', useLocation().state.proPicURL);
  const proPicURL = useLocation().state.proPicURL;

  let token = localStorage.getItem('token');
  useEffect(() => {
    fetch(`api/${gameMode}` + new URLSearchParams({ token: token }))
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setSongList(data);
      });
  }, []);

  const arrHelperFunc = (event) => {
    console.log('songList is: ', songList)
    console.log('event target: ', event.target.innerText)
    if (
      (event.target.innerText === 'More popular') &
      (songList[0].popularity < songList[1].popularity)
    ) {
      let tempScore = score + 1;
      setScore(tempScore);
      console.log('temp score is: ', tempScore);
    } else if (
      (event.target.innerText === 'More popular') &
      (songList[0].popularity > songList[1].popularity)
    ) {
      alert('Game OveR');
      let userInit = prompt(
        `You have a score of ${score}. Please enter initials:`
      );
      navigate('/gameresults', { state: { user: userInit } });
    }

    if (
      (event.target.innerText === 'Less popular') &
      (songList[0].popularity > songList[1].popularity)
    ) {
      let tempScore = score + 1;
      setScore(tempScore);
      console.log('temp score is: ', tempScore);
    } else if (
      (event.target.innerText === 'Less popular') &
      (songList[0].popularity < songList[1].popularity)
    ) {
      alert('Game OveR');
      let userInit = prompt(
        `You have a score of ${score}. Please enter initials:`
      );
      navigate('/gameresults', { state: { user: userInit } });
    }

    let tempList = [...songList];
    tempList.shift();
    console.log(tempList);

    if (tempList.length > 1) {
      setSongList(tempList);
    } else {
      // document.body.innerHTML =
      //   '<h1>Game Over</h1><input id="value"></input><button id="submit">Submit</button>';
      // const value = document.getElementById('value');
      // const submit = document.getElementById('submit');
      // submit.onclick = () => {
      //   navigate('/gameresults', { state: { user: value } });
      // };
      alert('Game OveR');
      let userInit = prompt(
        `You have a score of ${score}. Please enter initials:`
      );
      navigate('/gameresults', { state: { user: userInit } });
    }
  };

  // console.log(songList[0]);
  // console.log(songList[1]);

  return (
    <Box bg='#222326' minH='100vh' minW='100vw'>
      <Navbar isLoggedIn={isLoggedIn} proPicURL={proPicURL}></Navbar>
      <Flex direction={'column'} alignItems='center'>
        {/* <Heading color='#2EB953'>SpotiFynd</Heading> */}
        <Heading mt='25px' color='#2EB953'>
          Score: {score}
        </Heading>
      </Flex>

      <VStack align='center' w={'100%'}>
        {songList[0] ? <Vsbox data={[songList[0], songList[1]]} /> : 'Loading'}
      </VStack>

      <Heading mt={50} textAlign={'center'} color='#2EB953'>
        {songList[1] ? <em>{songList[1].title}</em> : 'Loading'} is:
      </Heading>

      <Stack
        spacing='100px'
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
          onClick={arrHelperFunc}
        >
          More popular
        </Box>
        <Box
          as='button'
          borderRadius='lg'
          bg='#2EB953'
          color='black'
          p={4}
          fontSize='4xl'
          onClick={arrHelperFunc}
        >
          Less popular
        </Box>
      </Stack>
      <Center>{/* <Flipcard /> */}</Center>
    </Box>
  );
}

export default Playgame;
