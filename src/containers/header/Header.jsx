import React from "react";
import './header.css'
import Mental from '../../assets/Mental.png';

const Header = () => { 
    return (
        <div className="zima__header">
            <div className="Zima__quote">
            <span>EVERYTHING HAS A CRACK</span>
            <span>AND THAT'S HOW LIGHT</span>
            <span>GET'S IN</span>
            <span className="call_to_Action"><a href="/">Start Chat</a></span>
            </div>
            <img src={Mental} alt="mental" className="zima__header-img" />
        </div>
    )
}

export default Header