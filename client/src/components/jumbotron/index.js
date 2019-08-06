import React from 'react'
import './main.css'

function Jumbotron () {
  return (
    <div className='jumbotron'>
      <div className='jumbo-welcome'>
        <h1> Welcome to Game Meet!</h1>
      </div>
      <div className='jumbo-txt'>
        <p>
			    Please select the choice of either logging in or creating an account. After you have completed these
			    actions you will be shown listings of meetup groups for games in a specific area.
        </p>
      </div>
    </div>
  )
}

export default Jumbotron
