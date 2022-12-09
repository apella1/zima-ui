import './condition.css';

const Condition = ( {title, text} ) => {

  return (
    <div className='condition'>
        <h4>{title}</h4>
        <p style={{color: 'white'}}>{text}</p>
    </div>
  )
}

export default Condition

// integrating auto save 
// working of useState and useEffect
