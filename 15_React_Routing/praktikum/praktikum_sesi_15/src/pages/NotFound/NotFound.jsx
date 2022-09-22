import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='pageNotFound'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" style={{padding: 5}}>Back to Home</Link>
    </div>
  )
}

export default NotFound