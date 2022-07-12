import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Buffer } from 'buffer'



function App() {
  const [count, setCount] = useState(0)
  const [windowCode, setWindowCode] = useState('')
  const [access_token, setAccessToken] = useState('')
  const [refresh_token, setRefreshToken] = useState('')

  const client_id = '2b88444e819a46e1a31fea18558f43d8';
  const client_secret = '0e0b57569f2c44aba10fbfc5149db042';
  const redirect_uri = 'http://localhost:3000';
  const AUTHORIZE = "https://accounts.spotify.com/authorize";
  let TOKEN = "https://accounts.spotify.com/api/token";
  

  function authenticateUser() {
    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private"
    window.location.href = url;
  
  }
  

  useEffect(() => {
    getWindowCode()
  }, [])

  function getWindowCode(){
    console.log('hit window code')
    let code = window.location.href;
    if (code.length > 'http://localhost:3000/'.length){
        
        const urlParams = new URLSearchParams(window.location.search);
        let newCode = urlParams.get('code');
        console.log('newcode is: ', newCode)
        code = newCode;
        setWindowCode((windowCode) => windowCode += code)
        fetchAccessToken(code)

      }
  }
  
  function fetchAccessToken(code) {
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(redirect_uri);
    body += "&client_id=" + client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);

  }

  function callAuthorizationApi(body){
    
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", TOKEN, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.setRequestHeader('Authorization', "Basic " + btoa(client_id + ':' + client_secret));
    // xhr.send(body);
    // xhr.onload = handleAuthorizationResponse;

    let requestOptions = {
      'method': "POST",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization' : "Basic " + btoa(client_id + ':' + client_secret),
      },
      'body': body
    }
    fetch(TOKEN, requestOptions )
      .then(res => res.json())
      .then(data => {
        if (data !== undefined && !data.error){
          console.log(data)
          console.log('access token is: ', data.access_token);
          console.log('refresh token is: ', data.refresh_token);
          setAccessToken((access_token) => access_token = data.access_token)
          setRefreshToken((refresh_token) => refresh_token = data.refresh_token)
        }
      })
      .catch(err => console.log('error in fetch: ', err))
  }

  function handleAuthorizationResponse(){
    if (this.status == 200){
      let data = JSON.parse(this.responseText);
      console.log('data in handleAuthResponse is: ', data);
    
      if(data.access_token !== undefined){
        let access_token_request = data.access_token;
        console.log('access token: ', access_token)
        setAccessToken((access_token) => access_token = access_token_request)
      }
      if (data.refresh_token !== undefined){
        let refresh_token_request = data.refresh_token;
        console.log('refresh token: ', refresh_token)
        setRefreshToken((refresh_token) => refresh_token_request)
      }
    }
    else{
      console.log(this.responseText);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Window Code: {windowCode}</p>
        <p>Access Token: {access_token}</p>
        <p>Refresh Token: {refresh_token}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={() => authenticateUser()}>Login With Spotify</button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
