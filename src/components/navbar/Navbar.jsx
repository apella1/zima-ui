import React from "react";
import './navbar.css'
import logo from '../../assets/Logo.png'

const Menu = () => (
    <>
    <a href="home">Home</a>
    <a href="conditions">Conditions</a>
    <a href="testimonials">Testimonials</a>
    <a href="blog">Afya Blog</a>
    <a href="sign-in">Log In</a>
    <button className="sign-up__button">Sign Up</button>
    </>
)

const Navbar = () => { 
    return (
            <div className="zima__navbar section__padding">
                <div className="zima__navbar--logo">
                    <img src={logo} alt='logo' />
                </div>

                <div className="zima__navbar--links">
                    <Menu />
                </div>
            </div>         
    )
}

export default Navbar