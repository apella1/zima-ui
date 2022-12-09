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
                <a href="instag" target='_blank' className='instagram'><FaInstagram size='1.5em'/></a>
                <a href="facebook" target='_blank' className='facebook'><FaFacebook size='1.5em'/></a>
                <a href="twitter" target='_blank' className='twitter'><FaTwitter size='1.5em'/></a>
                <a href="whatsapp" target='_blank' className='whatsapp'><FaWhatsapp size='1.5em'/></a>
            </div>

            <div className="zima__footer--copyright">&copy; 2022. All Rights Reserved</div>
        </div>
    )
}

export default Footer

// how to write media queries for react icons 
// Rewrite a more professional footer with expansive details 

