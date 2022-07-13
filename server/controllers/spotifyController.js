import fetch from 'node-fetch';

const spotifyController = {};

spotifyController.getUserSongs = (req, res, next) => {
  console.log('Received getUserSongs request');
  const userSongs = [];
  fetch(`https://api.spotify.com/v1/me/top/tracks?limit=50`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer BQClu_tMKvCzvxDoqHj9Aypky46z5doKwxpnX98fjMBJZAp56jYy50osAyDsGoXtmtOOdFAU_7HAkJR4xqsB3eNk9jHdJ3Nsf_qV1g-C1h-fytHi4FmlqKiUwqKtd-elnfRVNh7Z5uqZAQEF7KBf4ap-heqjiZIS1ezcc3010DHDu7MDVfHOIJfi_w'
    },
  })
    .then((data) => data.json())
    .then((parsedData) => {
      console.log('Received data back from the Spotify API');
      parsedData.items.forEach(function (el) {
        const songInfo = {};
        songInfo.title = el.name;
        songInfo.popularity = el.popularity;
        songInfo.artists = el.artists.map((eachArtist) => {
          return eachArtist.name;
        });
        songInfo.previewUrl = el.preview_url;
        songInfo.album = el.album.images[0].url;
        userSongs.push(songInfo);
      });
      userSongs.sort(() => Math.random() - 0.5);
      console.log('user songs within the getUserSongs request', userSongs);
      res.locals.userSongs = userSongs;
      return next();
    })
    .catch((err) => {
      console.log('this is the error in get songs fetch request', err);
      next(err);
    });
};

spotifyController.getPlaylistSongs = (req, res, next) => {
  console.log('Received getPlaylistSongs request');
  const playlistSongs = [];
  fetch(
    `https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks?limit=100`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer BQClu_tMKvCzvxDoqHj9Aypky46z5doKwxpnX98fjMBJZAp56jYy50osAyDsGoXtmtOOdFAU_7HAkJR4xqsB3eNk9jHdJ3Nsf_qV1g-C1h-fytHi4FmlqKiUwqKtd-elnfRVNh7Z5uqZAQEF7KBf4ap-heqjiZIS1ezcc3010DHDu7MDVfHOIJfi_w'
      },
    }
  )
    .then((data) => data.json())
    .then((parsedData) => {
      console.log('Received data back from the Spotify API');
      parsedData.items.forEach(function (el) {
        const songInfo = {};
        songInfo.title = el.track.name;
        songInfo.popularity = el.track.popularity;
        songInfo.artists = el.track.album.artists.map((eachArtist) => {
          return eachArtist.name;
        });
        songInfo.previewUrl = el.track.preview_url;
        songInfo.album = el.track.album.images[0].url;
        playlistSongs.push(songInfo);
      });
      playlistSongs.sort(() => Math.random() - 0.5);
      console.log(
        'user songs within the getPlaylistSongs request',
        playlistSongs
      );
      res.locals.playlistSongs = playlistSongs;
      next();
    })
    .catch((err) => {
      console.log('this is the error in get playlist fetch request', err);
      next(err);
    });
};

spotifyController.getMixedSongs = (req, res, next) => {
  console.log('recieved mixedSongs request');
  try {
    const userSongs = res.locals.userSongs;
    const playlistSongs = res.locals.playlistSongs;
    const mixedSongs = [];
    const numsUsed = {};
    while (mixedSongs.length < 51) {
      let randomNumber = Math.floor(Math.random() * (49 + 1));
      if (!numsUsed[randomNumber]) {
        mixedSongs.push(userSongs[randomNumber]);
        mixedSongs.push(playlistSongs[randomNumber]);
        numsUsed[randomNumber] = 1;
      }
    }
    console.log('these are the mixed Songs', mixedSongs);
    res.locals.mixedSongs = mixedSongs;
    next();
  } catch (err) {
    console.log('this is the error in get mixedSongs fetch request', err);
    next(err);
  }
};
// module.exports = spotifyController;
export default spotifyController;

// BQBPePxNy9-qEFeo26OgPjMJbn2Vl4Gw0RqTT7bID8uoF1o_VN7auc3doPTkLl-8-oGwlFmgPhIaPr63QowNE8rQpijepznC0-Ftj9Boucl_y8X1vCH6yR7gsUoYIjRfjB19qJwU5LoJGCz7eEBD_Wx1pumyGYjNhy3Cv5P8dTVWklPyCvnMEnY-ol5ckw
