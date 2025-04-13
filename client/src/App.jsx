import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main';
import Inventory from './components/Inventory'
import Car from './components/Car-Details'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Test_Drive from './components/Test_Drive';


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
          <Route path='/car/:id' element={<Car />} />
          <Route path='/test-drive/:id' element={<Test_Drive />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
