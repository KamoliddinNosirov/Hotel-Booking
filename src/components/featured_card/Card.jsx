import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

const Card = () => {
    return (
        <>
            <div className="card-featured">
                <span className='best_seller'>Best Seller</span>
                <img src="/public/imgs/yotoqxona1.png" alt="" />
                <div className="info">
                    <div className="name">
                        <h3>The Grand Resort</h3><span><FaStar className='icon' /> 4.3</span></div>
                    <p className='location'><IoLocationOutline className='icon' />Main Road 123 Street , 23 Colony</p>
                    <div className="bolim">
                        <h2>$450 <span>/ night</span></h2>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
            <div className="card-featured">
                <span className='best_seller remov'>Best Seller</span>
                <img src="/public/imgs/yotoqxona4.png" alt="" />
                <div className="info">
                    <div className="name">
                        <h3>The Grand Resort</h3><span><FaStar className='icon' /> 4.3</span></div>
                    <p className='location'><IoLocationOutline className='icon' /> Main Road 123 Street , 23 Colony</p>
                    <div className="bolim">
                        <h2>$450 <span>/ night</span></h2>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
            <div className="card-featured">
                <span className='best_seller remov'>Best Seller</span>
                <img src="/public/imgs/yotoqxona2.png" alt="" />
                <div className="info">
                    <div className="name">
                        <h3>The Grand Resort</h3><span><FaStar className='icon' /> 4.3</span></div>
                    <p className='location'><IoLocationOutline className='icon' /> Main Road 123 Street , 23 Colony</p>
                    <div className="bolim">
                        <h2>$450 <span>/ night</span></h2>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
            <div className="card-featured">
                <span className='new'>New</span>
                <img src="/public/imgs/yotoqxona3.png" alt="" />
                <div className="info">
                    <div className="name">
                        <h3>The Grand Resort</h3><span><FaStar className='icon' /> 4.3</span></div>
                    <p className='location'><IoLocationOutline className='icon' /> Main Road 123 Street , 23 Colony</p>
                    <div className="bolim">
                        <h2>$450 <span>/ night</span></h2>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
