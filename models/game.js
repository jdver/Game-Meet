const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  Game: { type: String, required: true },
  City: { type: String, required: true },
  Location: { type: String, required: true },
  Players: { type: Number, required: true },
  Date: { type: Date, default: Date.now },
  Synopsis: String
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
