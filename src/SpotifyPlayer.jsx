import { useState } from 'react';

function SpotifyPlayer(props) {

    const track = {
        name: props.trackName,
        preview_url: props.preview_url
    }

    const [audio, setAudio] = useState(null);
    const [fadeIn, setFadeIn] = useState(null);
    const [fadeOut, setFadeOut] = useState(null);

    const play = () => {
        if (audio || !track.preview_url) {
            return;
        }

    const newAudio = new Audio(track.preview_url);
    newAudio.volume = 0;

    newAudio
        .play()
        .catch((error) => {
            console.log(error)
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

    return(
        <div onMouseOver={play} onMouseLeave={stop}>
            {track.name}
        </div>
    )
}

export default SpotifyPlayer