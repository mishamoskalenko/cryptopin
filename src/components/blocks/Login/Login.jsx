import React from 'react'
import './login.scss'

function Login() {
    return (
        <section className='login wrapper'>
            <div className='login__wrapper'>
                <p className='login__title'>Password</p>
                <input className='login__input' type="password"  placeholder='Enter Password'/>
                <button className='login__button'>Submit</button>
            </div>
        </section>
    )
}

export default Login
