import './condition.css';
import PropTypes from 'prop-types';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { useState } from 'react';

const Condition = ( {title, text} ) => {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => { 
    setReadMore(!readMore)
  }
  return (
    <div className='condition'>
        <h4>{title}</h4>
        <p style={{color: 'white'}}>{text}</p>
        <FaArrowAltCircleDown 
          color='var(--color-btn)' 
          style={{background: 'white', width: '10%', cursor: 'pointer'}}
          onClick={handleClick}
        />
    </div>
  )
}

Condition.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default Condition

// the condition part should take in title, text and an icon to read more. The icon could also be routing to a page with the condition details