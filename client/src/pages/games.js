import React from 'react'
import Footer from '../components/footer'
import GamesNavbar from '../components/gamesNavbar'
import Container from '../components/container'
import API from '../utils/API'


class UserHome extends React.Component {
  state = {
    games: [],
    players: 0
  }

  componentDidMount() {
    this.loadGames()
  }

  loadGames = () => {
    API.getGames()
      .then(response => response.json())
      .then(res => {
        this.setState({ games: res })
      }
      )
      .catch(err => console.log(err))
  }

  addPlayer = () => {
    this.setState({ players: this.state.players + 1 });
  }


  render () {
    return (
      <div>
        <GamesNavbar />
        <Container style={{ marginTop: 50 }}>
          {this.state.games.map(data => (
            <Container key={data._id}>
              {console.log(data)}
                <strong onClick={this.addPlayer}>
                  <h3>Game: {data.Game}</h3>
                  City: {data.City}
                  <br />
                  Location: {data.Location}
                  <br />
                  Players: {this.state.players}/{data.Players}
                  <br />
                  Date: {data.Date}
                  <br />
                  Synopsis: {data.Synopsis}
                  <br />
                  <br />
                  <br />
                </strong>
          </Container>
        ))}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default UserHome
