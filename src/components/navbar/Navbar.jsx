import React, { useState } from 'react'
import "./Navbar.scss"
import { IoIosSearch } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Navbar = ({ setModalOpen, isScrolled, setIsScrolled }) => {

    const [search, setSearch] = useState(false)


    return (
        <>
            <nav className={isScrolled ? "nav" : "nav active"}>
                <div className="container">
                    <div className="logo">
                        <img src={isScrolled ? "/public/imgs/logo.svg" : "/public/imgs/logo 2.svg"} alt="" />
                    </div>
                    <ul>
                        <li onClick={() => {
                            setIsScrolled(true)
                        }}><NavLink to={"/"}>Home</NavLink></li>
                        <li onClick={() => {
                            setIsScrolled(false)
                        }}><NavLink to={"/hotels"}>Hotels</NavLink></li>
                        <li onClick={() => {
                            setIsScrolled(false)
                        }}><NavLink to={"/onehotelpage"}>Experiences</NavLink></li>
                        <li onClick={() => {
                            setIsScrolled('false')
                        }}><NavLink to={"/about"}>About</NavLink></li>
                        <button>Dashboard</button>
                    </ul>
                    <div className="icons">
                        <div className={search ? "search active" : "search"}>
                            <input type="text" placeholder='search' />
                            <IoIosSearch className='icon' onClick={() => {
                                setSearch(!search)
                            }} />
                        </div>
                        <IoIosSearch className={search ? 'icon search_icon' : 'icon'} onClick={() => {
                            setSearch(!search)
                        }} />
                        <FiUser className='icon' style={{ display: 'none' }} />
                        <button onClick={() => {
                            setModalOpen(true)
                        }} className='btn'>Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
