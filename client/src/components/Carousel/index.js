import React from 'react'
import Slider from 'react-slick'
import Catan from '../images/catan'
import Monopoly from '../images/monopoly'
import Munchkin from '../images/munchkin'
import Risk from '../images/risk'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

class Carousel extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div id='main'>
        <Slider {...settings}>
          <Catan />
          <Monopoly />
          <Munchkin />
          <Risk />
        </Slider>
      </div>

    )
  }
}

export default Carousel
