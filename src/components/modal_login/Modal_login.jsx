import React from 'react'
import "./Modal_login.scss"
import { FcGoogle } from 'react-icons/fc'
import { IoCloseCircleOutline, IoLogoApple } from 'react-icons/io5'

const Modal_login = ({modalOpen, setModalOpen }) => {
    return (
        <div className={modalOpen ? 'modal active' : 'modal'}>
            <div className="content">
                <span onClick={() => {
                    setModalOpen(false)
                }} className='closed'><IoCloseCircleOutline /> </span>
                <h1>Welcome Back</h1>
                <form action="">
                    <input className='input-field' type="email" placeholder='Enter your email' />
                    <input className='input-field2' type="password" placeholder='Enter your password' />
                    <div className="text_right">
                        <a href="#">Forgot Password</a>
                    </div>
                    <button>Log in</button>
                </form>
                <p>Don't have an account? <a href="#">Signup</a></p>
                <button className='btn_apple'><IoLogoApple />Login in with Apple</button>
                <button className='btn_google'><FcGoogle />Login in with Google</button>
            </div>
        </div>
    )
}

export default Modal_login
