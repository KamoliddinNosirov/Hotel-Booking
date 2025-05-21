import React from 'react'
import "./Home.scss"
import { FiCalendar, FiDatabase, FiSearch } from 'react-icons/fi'
import Card from '../../components/featured_card/card'

const Home = () => {
  return (
    <>
      <header>
        <div onLoad={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }} className="hero">
          <div className="container">
            <span>The Ultimate Hotel Experience</span>
            <h1>Discover Your Perfect Gateway Destination</h1>
            <p>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
            <div className="block">
              <div className="destination">
                <p><FiCalendar className='icon' />  Destination</p>
                <input type="text" placeholder='Type here' />
              </div>
              <div className="destination checkin">
                <p><FiCalendar className='icon' /> Check in</p>
                <input type='date' />
              </div>
              <div className="destination checkout">
                <p><FiCalendar className='icon' /> Check out</p>
                <input type='date' />
              </div>
              <div className="destination guest">
                <p>Guests</p>
                <input type='number' placeholder='0' />
              </div>
              <button><FiSearch /> search</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className='featured_hotels'>
          <div className="container">
            <h1>Featured Hotels</h1>
            <p>Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences</p>
            <div className="block">
              {<Card />}
              <button className='btn'>View All Destinations</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
