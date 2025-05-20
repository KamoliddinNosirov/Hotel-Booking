import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Hotels from './pages/hotels/Hotels'
import OneHotelPage from './pages/oneHotelPage/OneHotelPage'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/' element={<OneHotelPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
