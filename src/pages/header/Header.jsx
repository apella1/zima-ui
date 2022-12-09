import React from "react";
import './header.css';
import Mental from '../../assets/Mental.png';
import { Link } from "react-router-dom";

const Header = () => { 
    return (
        <div className="zima__header" name='home'>
            <div className="Zima__quote">
            <span>EVERYTHING HAS A CRACK</span>
            <span>AND THAT'S HOW LIGHT</span>
            <span>GET'S IN</span>
            <Link to='chat' className="zima__header--action">Start Chat</Link>
            </div>
            <img src={Mental} alt="mental" className="zima__header-img" />
        </div>
    )
}

export default Header


// todo include emmet as a vim plugin 
// todo go through react router dom to indetify the usage of link within the file system 
