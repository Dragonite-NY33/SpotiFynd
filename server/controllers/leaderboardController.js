import leaderboard from '../models/leaderboardModel.js';
const leaderboardController = {};

// middleware to store user's score
leaderboardController.storeUserScore = (req,res,next) => {
    console.log('does this even work? in storeUseScore')
    const {name} = req.body;
    const {score} = req.body;

    leaderboard.create({name: name, score: score}, (err, userScoreStored) => {
        if(err){
            return next(err);
        }
        res.locals.userScore = userScoreStored;
        return next();
    })
}
// middleware to get topTenScores in database
leaderboardController.getTopTenScores = (req,res,next) => {
    console.log('does this hit leaderboard endpoint?')
    leaderboard.find({}, (err, allScores) => {
        if(err){
            return next(err);
        }
        allScores.sort((a,b) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0));
        allScores = allScores.slice(0,10);
        res.locals.topTenScores = allScores;
        return next();
    })  
}

export default leaderboardController