const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const{ Schema } = mongoose

const WatchlistSchema = Schema({
    userID:{type: String, required: true},
    productsIDs: {type:[String]}
})

const Watchlist = mongoose.model('Watchlist', WatchlistSchema);
module.exports = Watchlist;