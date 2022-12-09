import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  return (
    <section className='signup-page'>
        <p>Sign up below.</p>
        <form action="" method='post'>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Enter name' id='name' name='name'/>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Enter email' id='email' name='email'/>
            <label htmlFor="email2">Confirm Email:</label>
            <input type="email" placeholder='Confirm email' id='email2' name='email2'/>
            <label htmlFor="password">Password:</label>
            <input type="password" required/>
            <label htmlFor="password2">Confirm Password:</label>
            <input type="password" required/>
            <input type="submit" value='Submit'/>
        </form>
        <p>Already have an account? <Link>Log In</Link></p>

    </section>
  )
}

export default Signup
