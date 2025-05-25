import React, { useEffect } from 'react'
import "./Hotels.scss"
import { FaRegStar, FaStar, FaSwimmingPool } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { GiCoffeeCup, GiMountains } from 'react-icons/gi'
import { PiCallBell, PiCoffeeLight } from 'react-icons/pi'
import { MdOutlineWifi } from 'react-icons/md'

const Hotels = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

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
                    <p className='price'>$299/night</p>
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
                    <div className="boxs">
                      <div className="box">
                        <PiCallBell />
                        <p>Room service</p>
                      </div>
                      <div className="box">
                        <MdOutlineWifi />
                        <p>Free WiFi</p>
                      </div>
                      <div className="box">
                        <PiCoffeeLight />
                        <p>Free Breakfast</p>
                      </div>
                    </div>
                    <p className='price'>$249/night</p>
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
                    <div className="boxs">
                      <div className="box">
                        <PiCallBell />
                        <p>Room service</p>
                      </div>
                      <div className="box">
                        <FaSwimmingPool />
                        <p>Pool Access</p>
                      </div>
                      <div className="box">
                        <MdOutlineWifi />
                        <p>Free WiFi</p>
                      </div>
                    </div>
                    <p className='price'>$199/night</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col2">
          <section className="filters">
            <div className="container">
              <div className="filter_div">
                <h2>Filters</h2>
                <span>CLEAR</span>
              </div>
              <div className="filters_div">
                <div className="bolim">
                  <p>Popular filters</p>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>Single Bed</span>
                  </div>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>Double Bed</span>
                  </div>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>Luxury Room</span>
                  </div>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>Family Suite</span>
                  </div>
                </div>
                <div className="bolim">
                  <p>Price Range</p>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>$ 0 to 500</span>
                  </div>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>$ 500 to 1000</span>
                  </div>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>$ 1000 to 2000</span>
                  </div>
                  <div className="input_div">
                    <input type="checkbox" />
                    <span>$ 2000 to 3000</span>
                  </div>
                </div>
                <div className="bolim">
                  <p>Sort By</p>
                  <div className="input_div">
                    <input type="radio" />
                    <span>Price Low to High</span>
                  </div>
                  <div className="input_div">
                    <input type="radio" />
                    <span>Price High to Low</span>
                  </div>
                  <div className="input_div">
                    <input type="radio" />
                    <span>Newest Fist</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Hotels
