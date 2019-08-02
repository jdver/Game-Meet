import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalCreateEvent () {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
          <label htmlFor='enterUser'>Username</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='enterUser' placeholder='Enter username!' />
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
            <label htmlFor='enterGame'>Choose a Game</label>
            <select className='form-control' id='enterGame'>
              <option>Dungeon and Dragons</option>
              <option>Monopoly</option>
              <option>Munchkin</option>
              <option>Catan</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='enterPlayers'>Amount of People</label>
            <select className='form-control' id='enterPlayers'>
              <option>3-4</option>
              <option>4-5</option>
              <option>5-6</option>
              <option>6-7</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCreateEvent
