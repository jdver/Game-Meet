import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalLogin () {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
      <>
        <Button variant='primary' className='btn btn-dark nav-item text-white' onClick={handleShow}>
        Login
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor='username'>Username</label>
            <div className='form-group'>
              <input type='text' className='form-control' id='username' placeholder='Enter username!' />
            </div>
            <label htmlFor='password'>Password</label>
            <div className='form-group'>
              <input type='password' className='form-control' id='password' placeholder='Enter password!' />
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

export default ModalLogin
