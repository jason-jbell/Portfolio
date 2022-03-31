import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

const testy = () => {
  console.log('pushed button')
}


const Home = () => {
  return (
    <div>
      <h1>BIG HOME</h1>
      <Link to={'/test'}>TESAT</Link>
      <Button variant='contained' onClick={testy}>CHECK ME OUT</Button>
      <Typography variant="h5" align="center" color="red" paragraph>
        Something short and leading about the collection below—its contents,
        the creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
      <Link to={'/test'} color="inherit">
        Your Website
      </Link>
    </div>
  )
}

export default Home
