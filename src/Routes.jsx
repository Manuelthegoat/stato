import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MeetTheTeam from './Pages/MeetTheTeam'
import Services from './Pages/Services'
import FAQ from './Pages/FAQ'
import About from './Pages/About'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/meet-the-team' element={<MeetTheTeam />} />
            <Route path='/services' element={<Services />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </>
  )
}

export default Routing