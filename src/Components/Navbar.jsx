import {
  Box,
  Flex,
  Center,
  Heading,
  Button,
  SimpleGrid,
  Avatar,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar(props) {
  //Necessary Oauth credentials
  const client_id = '2b88444e819a46e1a31fea18558f43d8';
  const client_secret = '0e0b57569f2c44aba10fbfc5149db042';
  const redirect_uri = 'http://localhost:3000';
  const AUTHORIZE = 'https://accounts.spotify.com/authorize';
  let TOKEN = 'https://accounts.spotify.com/api/token';

  const [windowCode, setWindowCode] = useState('');
  const [name, setName] = useState('');
  const {isLoggedIn, proPicURL, setLogin, setProfilePic} = props;
  
  useEffect(() => {
    getWindowCode();
  }, []);

  //Step 1: redirect to authentication page
  function authenticateUser() {
    let url = AUTHORIZE;
    url += '?client_id=' + client_id;
    url += '&response_type=code';
    url += '&redirect_uri=' + encodeURI(redirect_uri);
    url += '&show_dialog=true';
    url += '&scope=user-top-read';
    window.location.href = url;
  }
  //Step 2: Upon redirect to main page, take window code
  function getWindowCode() {
    // console.log('hit window code')
    let code = window.location.href;
    if (code.length > 'http://localhost:3000/'.length) {
      const urlParams = new URLSearchParams(window.location.search);
      let newCode = urlParams.get('code');
      // console.log('newcode is: ', newCode)
      code = newCode;
      setWindowCode((windowCode) => (windowCode += code));
      fetchAccessToken(code);
    }
  }
  //Step 3: build body of auth request for access token
  function fetchAccessToken(code) {
    let body = 'grant_type=authorization_code';
    body += '&code=' + code;
    body += '&redirect_uri=' + encodeURI(redirect_uri);
    body += '&client_id=' + client_id;
    body += '&client_secret=' + client_secret;
    callAuthorizationApi(body);
    window.history.pushState('', '', redirect_uri); //clears the url
  }
  //Step 4: receive access token
  function callAuthorizationApi(body) {
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' +  btoa(client_id + ':' + client_secret),
      },
      body: body,
    };
    fetch(TOKEN, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data !== undefined && !data.error) {
          // console.log(data)
          // console.log('access token is: ', data.access_token);
          // console.log('refresh token is: ', data.refresh_token);
          //sendToken(data);
          retrieveProfile(data.access_token);
        }
      })
      .catch((err) => {
        console.log('error in calling auth API: ', err);
      });
  }
  //Step 5: send token to back end
  function sendToken(data) {
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch('/login', requestOptions);
  }

  //get users profile picture and name and replace the login button
  function retrieveProfile(token) {
    let url = 'https://api.spotify.com/v1/me';
    let requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        /*
        const [isLoggedin, setLogin] = useState(false)
        const [proPicURL, setProfilePic] = useState ('')
        const [name, setName] = useState ('')
        */
        if (data.display_name) setName((name) => (name = data.display_name));
        if (data.images)
          setProfilePic((proPicURL) => (proPicURL = data.images[0].url));
        setLogin((isLoggedIn) => (isLoggedIn = true));
        localStorage.setItem('token', token);
        
      })
      .catch((err) => {
        console.log('error in retrieveProfile: ', err);
      });
  }

  return (
    <SimpleGrid color='rgb(27,215,96)' bg='rgb(39,42,54)' py='5' columns={3}>
      <Flex justify='left' ml='10'>
      <Button color='rgb(39,42,54)' bg='rgb(27,215,96)'>
            <RouterLink to='/gameresults'>Leaderboard</RouterLink>
          </Button>
      </Flex>

      <Flex justify='center'>
        <RouterLink to='/'>
          <Heading>SpotiFynd</Heading>
        </RouterLink>
      </Flex>
      <Flex justify='right' mr='10'>
        {isLoggedIn ? (
          <Avatar name='Player' src={proPicURL} />
        ) : (
          <Button
            color='rgb(39,42,54)'
            bg='rgb(27,215,96)'
            onClick={() => authenticateUser()}
          >
            Login
          </Button>
        )}
      </Flex>
    </SimpleGrid>
  );
}

export default Navbar;
