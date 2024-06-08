import React from 'react'
import "./newslatter.scss"

function Newslatter() {
    return (
        <section className='newslatter'>
            <div className='wrapper'>
                <h2 className='newslatter__header'>Trusted By <b className='newslatter__header--10'>10 Millions</b>+ Users. Create Your Crypto Portfolio On Cryptop <b className='newslatter__header--trader'>Trader</b>  In Seconds</h2>
                <form className='newslatter__form' action="post" >
                    <input className='newslatter__input' type='email' placeholder='Enter Your Email Id' required />
                    <button className='newslatter__button'>Sign up</button>
                </form>
            </div>
        </section>
    )
}

export default Newslatter
