import React from 'react'
import './style.css'

function GameData (props) {
  if (!props.show) {
    return null
  }

  return (
    <div className='description-txt'>
      <h2> {props.username} </h2>
      <h2> {props.description} </h2>
    </div>
  )
}

export default GameData
