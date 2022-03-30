import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>BIG HOME</h1>
      <Link to={'/test'}>TESAT</Link>
    </div>
  )
}

export default Home