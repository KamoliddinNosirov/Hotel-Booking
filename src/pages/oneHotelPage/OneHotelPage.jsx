import React, { useEffect, useState } from 'react'
import "./OneHotelPage.scss"
import { IoLocationOutline } from 'react-icons/io5'
import { FaHeart, FaRegStar, FaStar, FaSwimmingPool } from 'react-icons/fa'
import { PiCallBell } from 'react-icons/pi'
import { GiMountains } from 'react-icons/gi'
import { FiCalendar, FiSearch } from 'react-icons/fi'
import { HiHome } from 'react-icons/hi'
import { BsPatchCheckFill } from 'react-icons/bs'
import { BiLocationPlus } from 'react-icons/bi'
import { MdCircleNotifications } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'

const OneHotelPage = () => {

  const [mainimg, setMainimg] = useState('/public/imgs/yotoqxona4.png')
  const [activeImg, setActiveImg] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

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
                <img src={mainimg} alt="" />
              </div>
              <div className="select_imgs">
                <div className={activeImg ? "select_img active" : "select_img"}>
                  <img onClick={()=>{
                    setMainimg('/public/imgs/yotoqxona4.png')
                    setActiveImg(true)
                  }} src="/public/imgs/yotoqxona4.png" alt="" />
                </div>
                
                <div className={activeImg ? "select_img active" : "select_img"}>
                  <img onClick={()=>{
                    setMainimg('/public/imgs/yotoqxona1.png')
                    setActiveImg(true)
                  }} src="/public/imgs/yotoqxona1.png" alt="" />
                </div>
                
                <div className={activeImg ? "select_img active" : "select_img"}>
                  <img onClick={()=>{
                    setMainimg('/public/imgs/yotoqxona3.png')
                    setActiveImg(true)
                  }} src="/public/imgs/yotoqxona3.png" alt="" />
                </div>

                <div className={activeImg ? "select_img active" : "select_img"}>
                  <img onClick={()=>{
                    setMainimg('/public/imgs/yotoqxona2.png')
                    setActiveImg(true)
                  }} src="/public/imgs/yotoqxona2.png" alt="" />
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
            <div className="information_hotel">
              <div className="boxs">
                <div className="box">
                  <HiHome className='icon' />
                  <div className="box_info">
                    <h3>Clean & Safe Stay</h3>
                    <p>A well-maintained and hygienic space just for you.</p>
                  </div>
                </div>

                <div className="box">
                  <BsPatchCheckFill className='icon' />
                  <div className="box_info">
                    <h3>Enhanced Cleaning</h3>
                    <p>This host follows Staybnb's strict cleaning standards.</p>
                  </div>
                </div>

                <div className="box">
                  <FaLocationDot className='icon' />
                  <div className="box_info">
                    <h3>Excellent Location</h3>
                    <p>90% of guests rated the location 5 stars.</p>
                  </div>
                </div>

                <div className="box">
                  <FaHeart className='icon' />
                  <div className="box_info">
                    <h3>Smooth Check-In</h3>
                    <p>100% of guests gave check-in a 5-star rating</p>
                  </div>
                </div>
              </div>
              <div className="info__">
                <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default OneHotelPage
