import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main';
import Inventory from './components/Inventory'
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
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
