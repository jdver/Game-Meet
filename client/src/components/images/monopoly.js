import React from 'react'
import API from '../../utils/API'
import GameData from '../gameData/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'


class Monopoly extends React.Component {
  state = {
    username: '',
    description: '',
    monopolyData: true
  }

  componentDidMount() {
    API.monopoly()
    .then(response => {
      this.setState(() => ({
        username: response.data.games[0].name,
        description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      }));
    })
    .catch(error => this.setState({ error, monopolyData: false }))
  }

  monopolyShowing = (response) => {
    this.setState(state => ({
        monopolyData: !state.monopolyData,
    }));
  }

  render () {
    return (
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnNvJiRs2vPjPEwkkz1IqqwHOHivkq-av8UKRkDHQbhvjtmC_RA' alt='Monopoly'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.monopolyShowing}
            />
            <GameData show={!this.state.monopolyData} username={this.state.username} description={this.state.description} />
          </div>
    )
  }
}

export default Monopoly
