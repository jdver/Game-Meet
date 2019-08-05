import React from 'react'
import API from '../../utils/API.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalCreateEvent extends React.Component {
  state = {
    modalIsOpen: false,
    games: [],
    Game: '',
    City: '',
    Location: '',
    Players: '',
    Date: '',
    Synopsis: ''
  }

  loadGames = () => {
    API.getGames()
      .then(response => response.json())
      .then(res => {
        this.setState({ games: res })
        console.log(this.state.games)
      }
      )
      .catch(err => console.log(err))
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: ! this.state.modalIsOpen })
    this.loadGames()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveGame({
      Game: this.state.Game,
      City: this.state.City,
      Location: this.state.Location,
      Players: this.state.Players,
      Date: this.state.Date,
      Synopsis: this.state.Synopsis,
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  };

  render () {
    return (
      <>
      <Button variant='primary' className='btn btn-dark nav-item text-white' onClick={this.toggleModal.bind(this)}>
        Create Event
      </Button>
  
      <Modal isOpen={this.state.modalIsOpen}>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Create Event</ModalHeader>
        <ModalBody>
          <label htmlFor='enterGame'>Choose a Game</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterGame' placeholder='Enter the game being played' value={this.state.Game} onChange={this.handleInputChange} name="Game" />
          </div>
          <label htmlFor='enterCity'>Game City</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterCity' placeholder='Enter the city the game is being played' value={this.state.City} onChange={this.handleInputChange} name="City" />
          </div>
          <label htmlFor='enterLocation'>Game Location</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterLocation' placeholder='Enter the address of the game location' value={this.state.Location} onChange={this.handleInputChange} name="Location" />
          </div>
          <label htmlFor='enterPlayers'>Amount of Players</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterPlayers' placeholder='Enter the amount of players (3-6)' value={this.state.Players} onChange={this.handleInputChange} name="Players" />
          </div>
          <label htmlFor='enterDate'>Game Date</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterDate' placeholder='Enter the date (MM/DD/YYYY) the game is taking place' value={this.state.Date} onChange={this.handleInputChange} name="Date" />
          </div>
          <label htmlFor='enterSynopsis'>Game Synopsis</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterSynopsis' placeholder='Enter details about the event' value={this.state.Synopsis} onChange={this.handleInputChange} name="Synopsis" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant='secondary' onClick={this.handleFormSubmit}>
            Submit
          </Button>
          <Button variant='secondary' onClick={this.toggleModal.bind(this)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default ModalCreateEvent
