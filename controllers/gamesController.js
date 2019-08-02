const db = require('../models/index.js')

module.exports = {
  findAll: function (req, res) {
    db.Game
      .find(req.query)
      .sort({ city: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Game
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
