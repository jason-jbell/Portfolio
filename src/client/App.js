import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SingleProject from './components/SingleProject'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/projects/:id' element={<SingleProject /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App