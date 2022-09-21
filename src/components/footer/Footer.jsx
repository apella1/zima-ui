import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './footer.css';

const Footer = () => { 
    return (
        <div className="zima__footer">
            <div className="zima__footer--links">
                <a href="about">ABOUT US</a>
                <a href="partners">BLOG</a>
                <a href="resources">CONTACT US</a>
            </div>

            <div className="zima__footer--separation"></div>

            <div className="zima__footer--social">
                <a href="instagram" className='instagram'><FaInstagram size='1.5em'/></a>
                <a href="facebook" className='facebook'><FaFacebook size='1.5em'/></a>
                <a href="twitter" className='twitter'><FaTwitter size='1.5em'/></a>
                <a href="whatsapp" className='whatsapp'><FaWhatsapp size='1.5em'/></a>
            </div>

            <div className="zima__footer--copyright">&copy; copyright 2022</div>
        </div>
    )
}

export default Footer

// how to write media queries for react icons 