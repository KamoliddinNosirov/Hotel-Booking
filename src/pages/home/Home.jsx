import React from 'react'
import "./Home.scss"
import { FiCalendar, FiDatabase, FiSearch } from 'react-icons/fi'
import Card from '../../components/featured_card/Card'
import { FaArrowRight, FaStar, FaStarAndCrescent } from 'react-icons/fa'
import CardExclusive from '../../components/exclusive_offers/CardExclusive'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';


const Home = ({setIsScrolled, isScrolled}) => {

  React.useEffect(()=>{
    const handleScroll = () => {
        if(window.scrollY > 10){
            setIsScrolled(false)
        }else{
            setIsScrolled(true)
        }
        
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
}, [])

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
        <section className='exclusive_offers'>
          <div className="container">
            <div className="row">
              <div className="row-child">
                <h1>Exclusive Offers</h1>
                <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
              </div>
              <button>View All Offers<FaArrowRight className='icon' /></button>
            </div>
            <div className="row">
              {<CardExclusive />}
            </div>
          </div>
        </section>
        <section className='whatOurGuestsSay'>
          <div className="container">
            <h1>What Our Guests Say</h1>
            <p>Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.</p>
            <div className="row">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  750: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1500: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide className='swiper_div'>
                  <div className="img_container">
                    <img src="/public/imgs/userimg.jpg" alt="" />
                    <div className="user_info">
                      <h3>Emma Rodriguez</h3>
                      <p>Barcelona, Spain</p>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                  </div>
                  <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
                </SwiperSlide>
                <SwiperSlide className='swiper_div'>
                  <div className="img_container">
                    <img src="/public/imgs/userimg.jpg" alt="" />
                    <div className="user_info">
                      <h3>Emma Rodriguez</h3>
                      <p>Barcelona, Spain</p>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                  </div>
                  <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
                </SwiperSlide>
                <SwiperSlide className='swiper_div'>
                  <div className="img_container">
                    <img src="/public/imgs/userimg.jpg" alt="" />
                    <div className="user_info">
                      <h3>Emma Rodriguez</h3>
                      <p>Barcelona, Spain</p>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                  </div>
                  <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className='stayInspierd'>
          <div className="container">
            <h1>Stay Inspired</h1>
            <p>Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.</p>
            <div className="input_div">
              <input type="text" placeholder='Enter your email' />
              <button>Subscribe <FaArrowRight /></button>
            </div>
            <span>By subscribing, you agree to our Privacy Policy and consent to receive updates.</span>
          </div>
        </section>
      </main>
      <script src="../../assets/swiper.js"></script>
    </>
  )
}

export default Home
