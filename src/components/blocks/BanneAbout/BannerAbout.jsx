import React from 'react'
import './banner-about.scss'
import bannerAboutImage from '../../../images/banner-about.png'

function BannerAbout() {
    return (
        <section className='banner-about wrapper'>
            <div className='banner-about__text'>
                <h1 className='banner-about__header'>A Story Of Money And The <b className='banner-about__header--future'>Future</b> Of Crypto</h1>
                <p className='banner-about__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit</p>
                <button className='banner-about__button'>Join Our Team</button>
            </div>
            <div className='banner-about__image'>
                <img src={bannerAboutImage} alt="" />
            </div>
        </section>
    )
}

export default BannerAbout
