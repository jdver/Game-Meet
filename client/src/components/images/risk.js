import React from 'react'
import API from '../../utils/API'
import GameData from '../gameData/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'


class Risk extends React.Component {
  state = {
    username: '',
    description: '',
    riskData: true
  }

  componentDidMount() {
    API.risk()
    .then(response => {
      this.setState(() => ({
        username: response.data.games[0].name,
        description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      }));
    })
    .catch(error => this.setState({ error, riskData: false }))
  }

  riskShowing = (response) => {
    this.setState(state => ({
        riskData: !state.riskData,
    }));
  }

  render () {
    return (
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/en/3/36/Risk_logo.jpg' alt='Risk'
            style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.riskShowing}
            />
            <GameData show={!this.state.riskData} username={this.state.username} description={this.state.description} />
          </div>
    )
  }
}

export default Risk
