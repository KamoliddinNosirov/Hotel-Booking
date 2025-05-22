import React from 'react'
import "./Hotels.scss"
import { FaRegStar, FaStar, FaSwimmingPool } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { GiCoffeeCup, GiMountains } from 'react-icons/gi'
import { PiCallBell } from 'react-icons/pi'

const Hotels = () => {
  return (
    <>
      <main className='maintag'>
        <div className="col">
          <section className="hotelRooms">
            <div className="container">
              <h1>Hotel Rooms</h1>
              <p className='hotel_info'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
              <div className="cards">
                <div className="cardChild">
                  <div className="img_container">
                    <img src="/public/imgs/yotoqxona1.png" alt="" />
                  </div>
                  <div className="info">
                    <h4>New York</h4>
                    <h1>Urbanza Suites</h1>
                    <div className="icons">
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaRegStar className='star'/>
                      <p>200<span>+ reviews</span></p>
                    </div>
                    <div className="location">
                      <IoLocationOutline />
                      <p>Main Road 123 Street , 23 Colony</p>
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
                    <p className='price'>$399/night</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="cardChild">
                  <div className="img_container">
                    <img src="/public/imgs/yotoqxona4.png" alt="" />
                  </div>
                  <div className="info">
                    <h4>New York</h4>
                    <h1>Urbanza Suites</h1>
                    <div className="icons">
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaRegStar className='star'/>
                      <p>200<span>+ reviews</span></p>
                    </div>
                    <div className="location">
                      <IoLocationOutline />
                      <p>Main Road 123 Street , 23 Colony</p>
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
                    <p className='price'>$399/night</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="cardChild">
                  <div className="img_container">
                    <img src="/public/imgs/yotoqxona2.png" alt="" />
                  </div>
                  <div className="info">
                    <h4>New York</h4>
                    <h1>Urbanza Suites</h1>
                    <div className="icons">
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaRegStar className='star'/>
                      <p>200<span>+ reviews</span></p>
                    </div>
                    <div className="location">
                      <IoLocationOutline />
                      <p>Main Road 123 Street , 23 Colony</p>
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
                    <p className='price'>$399/night</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="cardChild">
                  <div className="img_container">
                    <img src="/public/imgs/yotoqxona3.png" alt="" />
                  </div>
                  <div className="info">
                    <h4>New York</h4>
                    <h1>Urbanza Suites</h1>
                    <div className="icons">
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaRegStar className='star'/>
                      <p>200<span>+ reviews</span></p>
                    </div>
                    <div className="location">
                      <IoLocationOutline />
                      <p>Main Road 123 Street , 23 Colony</p>
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
                    <p className='price'>$399/night</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col"></div>

      </main>
    </>
  )
}

export default Hotels
