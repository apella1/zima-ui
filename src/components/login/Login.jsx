import { Link } from 'react-router-dom';
import Signup from '../signup/Signup';
import './login.css';

const Login = () => {
  return (
    <section className="log-in">
        <h2>Log In</h2>
        <form action="" method='get'>
            <label htmlFor="username">Enter username/email:</label>
            <input type="text" required/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type='submit'>Login</button>
        </form>
        <p>Don't have an account? <Link path='/signup' element={<Signup />}>Sign up.</Link></p>
    </section>
  )
}

export default Login;

