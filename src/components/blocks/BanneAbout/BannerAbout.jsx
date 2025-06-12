import React from 'react'
import './banner-about.scss'
import bannerAboutImage from '../../../images/banner-about.png'

function BannerAbout() {
    return (
        <section className='banner-about wrapper'>
            <div className='banner-about__text'>
                <h1 className='banner-about__header'>A Story Of Money And The <b className='banner-about__header--future'>Future</b> Of Crypto</h1>
                <p className='banner-about__description'>Be part of the financial revolution. We are building a team of passionate innovators dedicated to making cryptocurrency accessible to everyone. Explore our open positions and help us shape the future of finance.</p>
                <button className='banner-about__button'>Join Our Team</button>
            </div>
            <div className='banner-about__image'>
                <img src={bannerAboutImage} alt="" />
            </div>
        </section>
    )
}

export default BannerAbout
