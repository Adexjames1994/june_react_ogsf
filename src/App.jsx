import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import AllComponent from './Components/AllComponent'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/allComp' element={<AllComponent/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
