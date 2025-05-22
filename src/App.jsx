import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Hotels from './pages/hotels/Hotels'
import OneHotelPage from './pages/oneHotelPage/OneHotelPage'
import Footer from './components/footer/Footer'
import React, { useState } from 'react'
import Modal_login from './components/modal_login/Modal_login'
function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = React.useState(true)


  return (
    <>
      <BrowserRouter>
        {<Modal_login setModalOpen={setModalOpen} modalOpen={modalOpen}/>}
        <Navbar setModalOpen={setModalOpen} setIsScrolled={setIsScrolled} isScrolled={isScrolled} />
        <Routes>
          <Route path='/' element={<Home setIsScrolled={setIsScrolled} isScrolled={isScrolled} />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/' element={<OneHotelPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
