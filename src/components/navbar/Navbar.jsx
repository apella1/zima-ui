import React from "react";
import './navbar.css';
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Login from "../login/Login";

const Menu = () => (
    <>
    <Link to="home">Home</Link>
    <Link to="conditions">Conditions</Link>
    <Link to="blog">Afya Blog</Link>
	<Link to="login" path={<Login />}>Log In</Link>
    <Link to='signup' className="sign-up__button">Sign Up</Link>
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

// difference between react-scroll's Link and react-router-dom's Link
