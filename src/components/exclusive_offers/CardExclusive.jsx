import React from 'react'
import './CardExclusive.scss'
import { FaArrowRight } from 'react-icons/fa'

const CardExclusive = () => {
  return (
    <>
      <div className="card">
        <span className='discount'>25% OFF</span>
        <div className="info">
          <h1>Summer Escape Package</h1>
          <p>Enjoy a complimentary night and daily breakfast</p>
          <span>Expires Aug 31</span>
        </div>
        <button>View Offers <FaArrowRight className='icon'/></button>
      </div>
      <div className="card">
        <span className='discount'>25% OFF</span>
        <div className="info">
          <h1>Summer Escape Package</h1>
          <p>Enjoy a complimentary night and daily breakfast</p>
          <span>Expires Aug 31</span>
        </div>
        <button>View Offers <FaArrowRight className='icon'/></button>
      </div>
      <div className="card">
        <span className='discount'>25% OFF</span>
        <div className="info">
          <h1>Summer Escape Package</h1>
          <p>Enjoy a complimentary night and daily breakfast</p>
          <span>Expires Aug 31</span>
        </div>
        <button>View Offers <FaArrowRight className='icon'/></button>
      </div>
    </>
  )
}

export default CardExclusive
