import React from 'react'
import API from '../../utils/API'
import GameData from '../gameData/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'


class Catan extends React.Component {
  state = {
    username: '',
    description: '',
    catanData: true,
  }

  componentDidMount() {
    API.catan()
    .then(response => {
      this.setState(() => ({
        username: response.data.games[0].name,
        description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      }));
    })
    .catch(error => this.setState({ error, catanData: false }))
  }

  catanShowing = (response) => {
    this.setState(state => ({
      catanData: !state.catanData,
    }));
  }

  render () {
    return (
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg' alt='catan'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.catanShowing}
            />
            <GameData show={!this.state.catanData} username={this.state.username} description={this.state.description} />
          </div>
    )
  }
}

export default Catan
