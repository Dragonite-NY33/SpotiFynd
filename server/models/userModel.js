const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// userSchema to store listOfSongs for each user in database
const userSchema = new Schema({
    name: {type: String, required: true},
    listOfSongs: [
        {
        songTitle: {type: String, required: true},
        artist: {type: String, required: true},
        album: {type: String, required: true},
        popularity: {type: Number, required: true},
        albumArt: {type: String, required: true}
        }
    ]
})