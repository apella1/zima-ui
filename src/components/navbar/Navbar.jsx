import React from "react";
import './navbar.css';
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'

const Menu = () => (
    <>
    <a href="home">Home</a>
    <a href="conditions">Conditions</a>
    <a href="blog">Afya Blog</a>
    <a href="sign-in">Log In</a>
    <button className="sign-up__button">Sign Up</button>
    </>
)

const Navbar = () => { 
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
            <div className="zima__navbar section__padding">
                <div className="zima__navbar--logo">
                    ZIMA
                </div>

                <div className="zima__navbar--links">
                    <Menu />
                </div>

                <div onClick={handleClick} className='menu-icons'>
                    {!nav ? <FaBars color='#1CF25A' size='2em' /> : <FaTimes color='#1CF25A' size='2em' />}
                </div>

                {/* Mobile Menu */}
                <div className={!nav ? 'hidden' : 'mobile-menu'}>
                    <Menu />
                </div>
            </div>         
    )
}

export default Navbar