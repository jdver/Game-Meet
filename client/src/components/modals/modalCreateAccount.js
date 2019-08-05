import React from 'react'
import API from '../../utils/API.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import swal from 'sweetalert'

class ModalCreateAccount extends React.Component {
  state = {
    modalIsOpen: false,
    users: [],
    username: '',
    password: '',
    repassword: ''
  }

  loadUsers = () => {
    API.getUsers()
      .then(response => response.json())
      .then(res => {
        this.setState({ users: res })
        console.log(this.state.users)
      }
      )
      .catch(err => console.log(err))
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: ! this.state.modalIsOpen })
    this.loadUsers()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    if (this.state.username && this.state.password) {
      API.saveUser({
        username: this.state.username,
        password: this.state.password,
      })
        .then(response => response.json())
        .catch(err => console.log(err));
    }
  };

  correctPW = () => {
    if (this.state.password !== this.state.repassword) {
      swal({
        text: 'Please make sure your password matches', 
        icon: 'error'
      })
    } else {
      this.handleFormSubmit()
    }
  }


  render () {
    return (
      <>
      <Button variant='primary' className='btn btn-dark nav-item text-white' onClick={this.toggleModal.bind(this)}>
        Create Account
      </Button>
  
      <Modal isOpen={this.state.modalIsOpen}>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Create Account</ModalHeader>
        <ModalBody>
          <label htmlFor='userIdName'>Username</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='userIdName' placeholder='Enter a username!' value={this.state.username} onChange={this.handleInputChange} name="username" />
          </div>
          <label htmlFor='userPassword'>Password</label>
          <div className='form-group'>
            <input type='password' className='form-control' id='userPassword' placeholder='Enter a password!' value={this.state.password} onChange={this.handleInputChange} name="password" />
          </div>
          <label htmlFor='userRepassword'>Re-Enter Password</label>
          <div className='form-group'>
            <input type='password' className='form-control' id='userRepassword' placeholder='Re-enter your password!' value={this.state.repassword} onChange={this.handleInputChange} name="repassword" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant='secondary' onClick={this.correctPW}>
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

export default ModalCreateAccount
