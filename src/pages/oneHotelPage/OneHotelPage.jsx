import React from 'react'
import "./OneHotelPage.scss"
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegStar, FaStar, FaSwimmingPool } from 'react-icons/fa'
import { PiCallBell } from 'react-icons/pi'
import { GiMountains } from 'react-icons/gi'
import { FiCalendar, FiSearch } from 'react-icons/fi'

const OneHotelPage = () => {
  return (
    <>
      <main>
        <section className='Urbanza_Suites'>
          <div className="container">
            <div className="h1_tag">
              <h1>Urbanza Suites</h1>
              <p>(Double Bed)</p>
              <span className='discount'>20% OFF</span>
            </div>
            <div className="stars">
              <FaStar className='star' />
              <FaStar className='star' />
              <FaStar className='star' />
              <FaStar className='star' />
              <FaRegStar className='star' />
              <p>200<span>+ reviews</span></p>
            </div>
            <div className="location">
              <IoLocationOutline />
              <p>Main Road 123 Street , 23 Colony</p>
            </div>
            <div className="img_container">
              <div className="main_img">
                <img src="/public/imgs/yotoqxona4.png" alt="" />
              </div>
              <div className="select_imgs">
                <div className="select_img">
                  <img src="/public/imgs/yotoqxona4.png" alt="" />
                </div>
                <div className="select_img active">
                  <img src="/public/imgs/yotoqxona1.png" alt="" />
                </div>
                <div className="select_img">
                  <img src="/public/imgs/yotoqxona3.png" alt="" />
                </div>
                <div className="select_img">
                  <img src="/public/imgs/yotoqxona2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="hotel_informatsiya">
              <div className="tags">
                <h1 className='title'>Experience Luxury Like Never Before</h1>
                <p className='price'>$299/night</p>
              </div>
              <div className="boxs">
                <div className="box">
                  <PiCallBell />
                  <p>Room service</p>
                </div>
                <div className="box">
                  <GiMountains />
                  <p>Mount view</p>
                </div>
                <div className="box">
                  <FaSwimmingPool />
                  <p>Pool Access</p>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="bolim">
                <div className="destination checkin">
                  <p>Check in</p>
                  <input type='date' />
                </div>
                <div className="line"></div>
                <div className="destination checkout">
                  <p>Check out</p>
                  <input type='date' />
                </div>
                <div className="line"></div>
                <div className="destination guest">
                  <p>Guests</p>
                  <input type='number' placeholder='1' />
                </div>
              </div>
              <button><FiSearch /> search</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default OneHotelPage
