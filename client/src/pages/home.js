import React from 'react'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Navbar from '../components/navbar'
// import Wrapper from '../components/wrapper';
// import createAccountModal from '../components/createAccountModal'
// import LoginModal from '../components/loginModal'
// import Form from '../components/form'
import Container from '../components/container'
import Col from '../components/col'
import Row from '../components/row'
import Carousel from '../components/Carousel'

function Home () {
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

export default Home
