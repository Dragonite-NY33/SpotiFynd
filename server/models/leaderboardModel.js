// const mongoose = require('mongoose');
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schema to store leadboard
const leaderboardScehma = new Schema({
         name: {type: String, required: true},
         score: {type: Number, required: true}
})

export default mongoose.model('Leaderboard', leaderboardScehma);