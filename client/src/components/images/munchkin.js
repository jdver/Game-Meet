import React from 'react'
import API from '../../utils/API'
import GameData from '../gameData/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'


class Munchkin extends React.Component {
  state = {
    username: '',
    description: '',
    munchkinData: true
  }

  componentDidMount() {
    API.munchkin()
    .then(response => {
      this.setState(() => ({
        username: response.data.games[0].name,
        description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      }));
    })
    .catch(error => this.setState({ error, munchkinData: false }))
  }

  munchkinShowing = (response) => {
    this.setState(state => ({
        munchkinData: !state.munchkinData,
    }));
  }

  render () {
    return (
          <div>
            <img src='https://cf.geekdo-images.com/itemrep/img/kPfLihonl0sXH47uh6fvXlJCQvQ=/fit-in/246x300/pic1871016.jpg' alt='Munchkin'
            style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.munchkinShowing}
            />
            <GameData show={!this.state.munchkinData} username={this.state.username} description={this.state.description} />
          </div>
    )
  }
}

export default Munchkin
