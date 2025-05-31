import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import OneHotelPage from '../../pages/oneHotelPage/OneHotelPage'

const Card = ({ item }) => {


    const navigate = useNavigate()


    return (
        <>
            <div className="card-featured">
                <span className={item.new || item.bestseller ? 'best_seller' : 'best_seller hidden'}>{
                    item.new ? 'New' : item.bestseller ? 'Best Seller' : ''
                    }</span>
                <img onClick={() => {
                    navigate('/onehotelpage')
                }} src={item.image} alt="" />
                <div className="info">
                    <div className="name">
                        <h3>{item.name.slice(0, 25)}</h3><span><FaStar className='icon' />{item.rating}</span></div>
                    <p className='location'><IoLocationOutline className='icon' />{item.location.slice(0, 37)}</p>
                    <div className="bolim">
                        <h2>${item.price}<span>/ night</span></h2>
                        <button onClick={() => {
                            navigate('/onehotelpage')
                        }}>Book now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
