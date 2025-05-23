import React from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/error'); 
    };
    return (
        <section className='login wrapper'>
            <form className='login__wrapper' onSubmit={handleSubmit}>
                <p className='login__title'>Password</p>
                <input className='login__input' type="password"  placeholder='Enter Password' required/>
                <button className='login__button' type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Login
