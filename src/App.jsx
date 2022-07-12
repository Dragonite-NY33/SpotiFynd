import { useState } from 'react'
import logo from './logo.svg'
import SpotifyPlayer from './SpotifyPlayer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SpotifyPlayer trackName='Hold My Liquor' preview_url="https://p.scdn.co/mp3-preview/08ed60c7e6de94eb48de8026c45b2ae6937870eb?cid=774b29d4f13844c495f206cafdad9c86"/>
        <p></p>
        <SpotifyPlayer trackName='Trust' preview_url="https://p.scdn.co/mp3-preview/df0bd62bd0c37b37bd3f0656ec1b58a59d039aed?cid=774b29d4f13844c495f206cafdad9c86"/>
        <p></p>
        <SpotifyPlayer trackName='Me Porto Bonito' preview_url="https://p.scdn.co/mp3-preview/8513b15fb5b39966d8eccaa7b8c050c7a570e6e8?cid=774b29d4f13844c495f206cafdad9c86"/>
      </header>
    </div>
  )
}

export default App