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

  const [card_info, setCard_info] = useState([
    {
      id: 1,
      name: "The Grand Resort",
      rating: 4.3,
      location: "Main Road 123 Street, 23 Colony",
      price: 450,
      image: "/public/imgs/yotoqxona1.png",
      location: "Main Road 123 Street, 23 Colony",
      bestseller: true,
      new: false,
    },
    {
      id: 2,
      name: "The Ocean View Hotel",
      rating: 4.5,
      location: "Beachside Avenue, 45 Bay Area",
      price: 500,
      image: "/public/imgs/yotoqxona2.png",
      location: "Main Road 123 Street, 23 Colony",
      bestseller: false,
      new: false,
    },
    {
      id: 3,
      name: "Mountain Retreat",
      rating: 4.7,
      location: "Hilltop Road, 12 Mountain Village",
      price: 600,
      image: "/public/imgs/yotoqxona3.png",
      location: "Main Road 123 Street, 23 Colony",
      bestseller: true,
      new: false,
    },
    {
      id: 4,
      name: "Urbanza Suites",
      rating: 4.7,
      location: "Hilltop Road, 12 Mountain Village",
      price: 600,
      image: "/public/imgs/yotoqxona4.png",
      location: "Main Road 123 Street, 23 Colony",
      bestseller: false,
      new: true,
    }
  ])


  return (
    <>
      <BrowserRouter>
        {<Modal_login setModalOpen={setModalOpen} modalOpen={modalOpen}/>}
        <Navbar setModalOpen={setModalOpen} setIsScrolled={setIsScrolled} isScrolled={isScrolled} />
        <Routes>
          <Route path='/' element={<Home setIsScrolled={setIsScrolled} isScrolled={isScrolled} card_info={card_info}/>} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/onehotelpage' element={<OneHotelPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
