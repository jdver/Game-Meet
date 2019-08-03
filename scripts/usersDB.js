const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

/** connect to the mongodb using either the environment var (for Heroku) or your local db link */
mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/usersDB'
)

/** This is just created some data in your local database for testing  */
const userSeed = [
  {
    Username: 'akjar',
    Password: 'Scout34!',
    Date: new Date(Date.now())
  }
]

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
