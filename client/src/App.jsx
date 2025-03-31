import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main';
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
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
