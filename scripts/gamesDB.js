const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

/** connect to the mongodb using either the environment var (for Heroku) or your local db link */
mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/gamesDB'
)

/** This is just created some data in your local database for testing  */
const gameSeed = [
  {
    Game: 'Catan',
    City: 'Berkeley',
    Location: 'UC Berkeley Quad',
    Players: 4,
    Date: new Date(Date.now()),
    Synopsis: 'A four player game of Catan on the UC Berkeley Quad, come join!'
  },
  {
    Game: 'Monopoly',
    City: 'Oakland',
    Location: 'Lake Merrit',
    Players: 6,
    Date: new Date(Date.now()),
    Synopsis: 'A six player game of Monopoly at Lake Merit, come join!'
  },
  {
    Game: 'Munchkin',
    City: 'San Francisco',
    Location: 'Ferry Building',
    Players: 5,
    Date: new Date(Date.now()),
    Synopsis: 'A five player game of Munchkin at the ferry building, come join!'
  },
  {
    Game: 'Risk',
    City: 'San Jose',
    Location: 'Cesar Chavez Plaza',
    Players: 3,
    Date: new Date(Date.now()),
    Synopsis: 'A three player game of Risk at Cesar Chavez Plaza, come join!'
  }
]

/** This is just created some data in your local database for testing  */
const userSeed = [
  {
    username: 'akjar',
    password: 'Scout34!',
    date: new Date(Date.now())
  }
]

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
