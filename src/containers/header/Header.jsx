import React from "react";
import './header.css'
import mental from '../../assets/Mental.png'

const Header = () => { 
    return (
        <div className="zima__header">
            <img src={mental} alt="mental" className="zima__header-img" />
        </div>
    )
}

export default Header