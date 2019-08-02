import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Container from '../components/container'
import API from "../utils/API"


class UserHome extends React.Component {
  state = {
    games: [],
    game: '',
    city: '',
    location:'',
    players: '',
    date: Date,
    synopsis: ''
  };

  componentDidMount() {
    this.loadGames();
  }

  loadGames = () => {
    API.getGames()
      .then(response => response.json())
      .then(res => {
        console.log(res)
        this.setState({ games: res, game: '', city: '', location: '', players: '', date: '', synopsis: '' })
      }
      )
      .catch(err => console.log(err));
  };


  render () {
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: 50 }}>
          {this.state.games.length} 
        </Container>
        <Footer />
      </div>
    )
  }
}

export default UserHome
