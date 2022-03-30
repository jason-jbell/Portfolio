import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const testy = () => {
  console.log('pushed button')
}


const Home = () => {
  return (
    <div>
      <h1>BIG HOME</h1>
      <Link to={'/test'}>TESAT</Link>
      <Button variant='contained' onClick={testy}>CHECK ME OUT</Button>
    </div>
  )
}

export default Home
