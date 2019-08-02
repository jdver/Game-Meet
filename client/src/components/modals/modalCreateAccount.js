import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalCreateAccount () {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' className='btn btn-dark nav-item text-white' onClick={handleShow}>
    Create Account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor='userIdName'>Username</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='userIdName' placeholder='Enter a username!' />
          </div>
          <label htmlFor='userPassword'>Password</label>
          <div className='form-group'>
            <input type='password' className='form-control' id='userPassword' placeholder='Enter a password!' />
          </div>
          <label htmlFor='userRepassword'>Re-Enter Password</label>
          <div className='form-group'>
            <input type='password' className='form-control' id='userRepassword' placeholder='Re-enter your password!' />
          </div>
          <label htmlFor='userEmail'>Email Address</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='userEmail' placeholder='Enter your email!' />
          </div>            </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalCreateAccount
