import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Test from './components/Test'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/test' element={<Test /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App