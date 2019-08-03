import axios from 'axios'

export default {
  catan: function () {
    return axios
      .get('https://www.boardgameatlas.com/api/search?name=Catan&client_id=17PU6JsMTn')
  },

  monopoly: function () {
    return axios
      .get('https://www.boardgameatlas.com/api/search?name=Monopoly&client_id=17PU6JsMTn')
  },

  munchkin: function () {
    return axios
      .get('https://www.boardgameatlas.com/api/search?name=Munchkin&client_id=17PU6JsMTn')
  },

  risk: function () {
    return axios
      .get('https://www.boardgameatlas.com/api/search?name=Risk&client_id=17PU6JsMTn')
  },

  // Gets all games
  getGames: function () {
    return fetch('/api/games')
  },

  // save event
  saveGame: function (gameData) {
    return fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameData)
    })
  },

  // Gets all users
  getUsers: function () {
    return fetch('/api/users')
  }
}
