import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Router for ultra-responsive web apps</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      </div>
    )
  }
}

export default HomePage
