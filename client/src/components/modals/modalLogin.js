import React from 'react'
import { Route } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import API from '../../utils/API.js'
import swal from 'sweetalert'

class ModalLogin extends React.Component {
  state = {
    modalIsOpen: false,
    users: [],
    username: '',
    password: ''
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: ! this.state.modalIsOpen })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    API.getUsers()
      .then(response => response.json())
      .then(res => {
        this.setState({ users: res })
        this.state.users.forEach((data) => {
          if (this.state.username === data.username && this.state.password === data.password) {
            swal({
              text: 'Your Are logged in', 
              icon: 'error'
            })
          } else {
            swal({
              text: 'Please make sure your username and password are correct', 
              icon: 'error'
            })
          }  
        })
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <>
      <Button variant='primary' className='btn btn-dark nav-item text-white' onClick={this.toggleModal.bind(this)}>
        Login
      </Button>
  
      <Modal isOpen={this.state.modalIsOpen}>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>
        <ModalBody>
          <label htmlFor='username'>Username</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='username' placeholder='Enter username!' value={this.state.username} onChange={this.handleInputChange} name="username" />
          </div>
          <label htmlFor='password'>Password</label>
          <div className='form-group'>
            <input type='password' className='form-control' id='password' placeholder='Enter password!' value={this.state.password} onChange={this.handleInputChange} name="password" />
          </div>
        </ModalBody>
        <ModalFooter> 
          <Button variant='secondary' onClick={this.handleFormSubmit}>
            Submit
          </Button>
          <Route render={({ history }) => (
              <Button
                variant='secondary'
                onClick={() => { history.push('/games') }}
              >
                Close
              </Button>
          )} />
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default ModalLogin
