import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './footer.css'

const Footer = () => { 
    return (
        <div className="zima__footer">
            <div className="zima__footer--links">
                <a href="about">ABOUT US</a>
                <a href="partners">PARTNERS</a>
                <a href="resources">RESOURCES</a>
            </div>

            <div className="zima__footer--separation"></div>

            <div className="zima__footer--social">
                <i><a href="instagram"><FaInstagram /></a></i>
                <i><a href="facebook"><FaFacebook /></a></i>
                <i><a href="twitter"><FaTwitter /></a></i>
                <i><a href="whatsapp"><FaWhatsapp /></a></i>
            </div>

            <div className="zima__footer--copyright">copyright 2022</div>
        </div>
    )
}

export default Footer