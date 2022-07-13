const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema to store leadboard
const leaderboardScehma = new Schema({
    playerStats: {type: String,  required: true}
})