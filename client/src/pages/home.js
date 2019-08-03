import React from 'react'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Navbar from '../components/navbar'
import Container from '../components/container'
import Col from '../components/col'
import Row from '../components/row'
import Carousel from '../components/Carousel'
import API from '../utils/API'

class Home extends React.Component {

  componentDidMount() {
    this.loadUsers()
  }

  loadUsers = () => {
    API.getUsers()
      .then(response => response.json())
      .then(res => {
        console.log(res)
      }
      )
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: 50 }}>
          <Row>
            <Col size='md-12'>
              <Jumbotron />
            </Col>
          </Row>

          <Row>
            <Col size='md-12'>
              <Carousel />
            </Col>
          </Row>

          <Footer />
        </Container>
      </div>
    )  
  }
}

export default Home
