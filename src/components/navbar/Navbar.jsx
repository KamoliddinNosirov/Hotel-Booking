import React, { useState } from 'react'
import "./Navbar.scss"
import { IoIosSearch } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [search, setSearch] = useState(false)

    return (
        <>
        <header>
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src="/public/imgs/logo.svg" alt="" />
                    </div>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/hotels"}>Hotels</NavLink></li>
                        <li><a href="">Experiences</a></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                    </ul>
                    <div className="icons">
                        <div className={search ? "search active" : "search"}>
                            <input type="text" placeholder='search' />
                        <IoIosSearch className='icon' onClick={()=>{
                            setSearch(!search)
                        }}/>
                        </div>
                        <IoIosSearch className={search ? 'icon search_icon' : 'icon'} onClick={()=>{
                            setSearch(!search)
                        }} />
                        <FiUser className='icon' />
                        <button className='btn'>Login</button>
                    </div>
                </div>
            </nav>
            </header>
        </>
    )
}

export default Navbar
