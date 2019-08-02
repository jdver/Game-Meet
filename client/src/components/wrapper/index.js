
import React from 'react'

function Wrapper (props) {
  return <div className='container' style={{ textAlign: 'center' }}> {props.children} </div>
}

export default Wrapper
