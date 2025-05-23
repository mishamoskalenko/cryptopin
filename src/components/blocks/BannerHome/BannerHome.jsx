import React from 'react'
import "../BannerHome/banner-home.scss"
import bannerImage from "../../../images/banner-main.png"
import bannerRating from "../../../images/banner-rating.jpg"
import ratingStart from "../../../images/rating-starts.svg"
import { Link } from 'react-router-dom';

let date = new Date()

const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
});

function Banner() {
    return (
        <section className='banner'>
            <div className='wrapper'>
                <div className='banner__info'>Updated on {formattedDate}</div>
                <h1 className='banner__header'>Build Wealth <b className='banner__header--auto'>Automatically</b> With Crypto</h1>
                <p className='banner__description'>Start your journey to financial freedom with our automated crypto investment platform. We make cryptocurrency investing simple, secure, and accessible for everyone.</p>
                <Link className='banner__button' to={`/about`}>Get Started</Link>
            </div>
            <div className='banner__wrapper'>
                <img className="banner__image" src={bannerImage} alt="" />
            </div>
            <div className='banner__group wrapper'>
                <ul className='banner__list banner-list'>
                    <li className='banner-list__item'>
                        <p className='banner-list__header'>$12B<span className='banner-list__header--1'>+</span></p>
                        <p className='banner-list__description'>Assets<br></br>management</p>
                    </li>
                    <li className='banner-list__item'>
                        <p className='banner-list__header'>200<span className='banner-list__header--2'>+</span></p>
                        <p className='banner-list__description'>Supported<br></br>crypto currencies</p>
                    </li>
                    <li className='banner-list__item'>
                        <p className='banner-list__header'>0.10<span className='banner-list__header--3'>%</span></p>
                        <p className='banner-list__description'>Lowest<br></br>transaction fees </p>
                    </li>
                    <li className='banner-list__item'>
                        <p className='banner-list__header'>5M<span className='banner-list__header--4'>+</span></p>
                        <p className='banner-list__description'>Cryptop users<br></br>worldwide</p>
                    </li>
                </ul>
                <div className='banner__rating banner-ratting'>
                    <img className='banner-ratting__image' src={bannerRating} alt="" />
                    <div className='banner-ratting__group'>
                        <img className='banner-ratting__stars' src={ratingStart} alt="" />
                        <p className='banner-ratting__description'>Loved by teams worldwide Trusted by 10 Million+</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
