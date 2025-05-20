import React from 'react'
import "./Footer.scss"
import { FiArrowRight, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <div className="main_div">
          <div className="logo">
            <NavLink to={"/"}><img src="/public/imgs/logo 2.svg" alt="" /></NavLink>
          </div>
          <p>Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
          <div className="icons">
            <FiInstagram className='icon' />
            <FiTwitter className='icon' />
            <FiFacebook className='icon' />
            <FiLinkedin className='icon' />
          </div>
        </div>
        <div className="links">
          <ul>
            <span>COMPANY</span>
            <li><a href="">About</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Partners</a></li>
          </ul>
          <ul>
            <span>SUPPORT</span>
            <li><a href="">Help Center</a></li>
            <li><a href="">Safety Information</a></li>
            <li><a href="">Cancellation Options</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Accessibility</a></li>
          </ul>
        </div>
        <div className="email">
          <span>STAY UPDATED</span>
          <p>Subscribe to our newsletter for travel inspiration and special offers.</p>
          <div className="email_div">
            <input type="email" placeholder='Enter your email' />
            <button><FiArrowRight /></button>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 QuickStay. All rights reserved.</p>
          <div className='ptags'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
