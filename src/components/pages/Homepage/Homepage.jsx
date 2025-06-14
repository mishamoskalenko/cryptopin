import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../blocks/BannerHome/BannerHome'
import About from '../../blocks/About/About'
import Client from '../../blocks/Client/Client'
import Work from '../../blocks/Work/Work'
import Product from '../../blocks/Product/Product'
import Whyus from '../../blocks/Whyus/Whyus' 
import Prosses from '../../blocks/Prosses/Prosses'
import Testimonial from '../../blocks/Testimonial/Testimonial'
import Mobile from '../../blocks/Mobile/Mobile'
import Newslatter from '../../blocks/Newslatter/Newslatter'
import Footer from '../../layout/Footer/Footer'

function Homepage() {
    return (
        <>
            <Header />
            <Banner />
            <About />
            <Client class={"client wrapper"}/>
            <Work />
            <Product />
            <Whyus />
            <Prosses />
            <Testimonial />
            <Mobile />
            <Newslatter />
            <Footer />
        </>
    )
}

export default Homepage
