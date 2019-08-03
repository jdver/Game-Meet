import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalCreateEvent () {
  // const state = {
  //   game: '',
  //   city: '',
  //   location: '',
  //   players: '',
  //   date: '',
  //   synopsis: ''
  // }

  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const handleFormSubmit = event => {
  //   event.preventDefault()
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(response => response.json())
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // }

  return (
    <>
      <Button variant='primary' className='btn btn-dark nav-item text-white' onClick={handleShow}>
        Create Event
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-group'>
            <label htmlFor='enterGame'>Choose a Game</label>
            <select className='form-control' id='enterGame'>
              <option>Catan</option>
              <option>Monopoly</option>
              <option>Munchkin</option>
              <option>Risk</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='enterCity'>Choose a City</label>
            <select className='form-control' id='enterCity'>
              <option>Berkeley</option>
              <option>Oakland</option>
              <option>San Francisco</option>
              <option>San Jose</option>
            </select>
          </div>
          <label htmlFor='enterLocation'>Game Location</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterLocation' placeholder='Enter the address of the game location' />
          </div>
          <div className='form-group'>
            <label htmlFor='enterPlayers'>Amount of People</label>
            <select className='form-control' id='enterPlayers'>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <label htmlFor='enterLocation'>Game Date</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterDate' placeholder='Enter the date (MM/DD/YYYY) the game is taking place' />
          </div>
          <label htmlFor='enterLocation'>Game Synopsis</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterSynopsis' placeholder='Enter details about the event' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Submit
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCreateEvent
