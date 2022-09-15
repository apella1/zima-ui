import './condition.css';
import PropTypes from 'prop-types';

const Condition = ( {title, text} ) => {
  return (
    <div className='condition'>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )

}

Condition.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default Condition

// the condition part should take in title, text and an icon to read more. The icon could also be routing to a page with the condition details