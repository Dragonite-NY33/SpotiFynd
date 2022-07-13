import express from 'express';
const app = express();
import mongoose from 'mongoose';
const client_id = '2b88444e819a46e1a31fea18558f43d8';
const client_secret = '0e0b57569f2c44aba10fbfc5149db042';
const redirect_uri = 'http://localhost:3000/auth/spotify/callback';
import cors from 'cors';
import spotifyController from './controllers/spotifyController.js';
import leaderboardController from './controllers/leaderboardController.js'

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const MONGO_URI =
  'mongodb+srv://spotiFynd:cswcS16Z8664lL3l@cluster0.jav5ed0.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

// request to get user's top 50 songs
app.get('/api/userSongs', spotifyController.getUserSongs, (req, res, next) => {
  res.send(res.locals.userSongs);
});

// endpoint to get top 50 spotify songs
app.get(
  '/api/playlistSongs',
  spotifyController.getPlaylistSongs,
  (req, res, next) => {
    res.send(res.locals.playlistSongs);
  }
);

// endpoint to get mix of user songs and top 50 spotify songs
app.get(
  '/api/mixedSongs',
  spotifyController.getUserSongs,
  spotifyController.getPlaylistSongs,
  spotifyController.getMixedSongs,
  (req, res, next) => {
    res.send(res.locals.mixedSongs);
  }
);

// request to unknown route
app.use((req, res) => res.statusMessage(404).send('unknown route'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
