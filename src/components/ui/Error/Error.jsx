import React from 'react'
import './Error.scss'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <section className='error wrapper'>
            <h2 className='error__header'>404</h2>
            <p className='error__subheader'>Oops! This page is in dev🛠️</p>
            <p className='error__description'>Free equity investments and flat 20$ intraday and F&O trades even higher earning rates and our lowest borrowing rates.</p>
            <button className=''>
                <Link className='error__button' to={`/`}>Go To Homepage</Link>
            </button>
        </section>
    )
}

export default Error
