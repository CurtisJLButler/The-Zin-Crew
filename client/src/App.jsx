import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main';
import Inventory from './components/Inventory'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

//import './App.css'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
