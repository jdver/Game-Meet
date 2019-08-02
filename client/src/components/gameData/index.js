import React from 'react'

function GameData (props) {
  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2> {props.username} </h2>
      <h2> {props.description} </h2>
    </div>
  )
}

export default GameData
