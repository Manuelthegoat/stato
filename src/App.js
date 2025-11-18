import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'
import Routing from './Routes'

const App = () => {
  return (
    <>
      <Header />
    <Routing />
      <Footer />
    </>
  )
}

export default App