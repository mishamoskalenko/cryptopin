import React from 'react'
import "./product.scss"
import investImage from "../../../images/invest.svg";

function Product() {
    return (
        <section className='product wrapper'>
            <div className='product__sub product-sub'>
                <p className='product-sub__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt<br></br>ut labore et dolore magna
                    aliqua ut dolor sit</p>
                <button className='product-sub__button'>Get Started</button>
            </div>
            <div className='product__stock stock'>
                <div className='stock__text'>
                    <h2 className='stock__header'>Your Money...Your Choice</h2>
                    <p className='stock__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do<br></br>eiusmod tempor incididunt </p>
                </div>
                <div className='stock__buttons stock-buttons'>
                    <ul className='stock-buttons__list stock-list'>
                        <li className='stock-list__item stock-list__item--1'>Stock</li>
                        <li className='stock-list__item stock-list__item--2'>US Stock</li>
                        <li className='stock-list__item stock-list__item--3'>FDs</li>
                    </ul>
                </div>
            </div>
            <div className='invest'>
                <div className='invest__buttons invest-buttons'>
                    <ul className='invest-buttons__list'>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <circle cx="11.5547" cy="10.8682" r="10.8457" fill="#5CD29A" />
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <circle cx="11.4238" cy="10.8685" r="10.8457" fill="#FFB039" />
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <circle cx="11.291" cy="10.8685" r="10.8457" fill="#FF6868" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className='invest__wrapper'>
                    <div className='invest__image'>
                        <img src={investImage} alt="" />
                    </div>
                    <div className='invest__text invest-text'>
                        <p className='invest-text__subtitle'>Invest in everything</p>
                            <p className='invest-text__rate'><b className='invest-text__percent'>6.7%</b>Intrest Rate</p>
                        <p className='invest-text__description'>Proactively envisioned multimedia based expertise and<br></br>cross-media growth strategies. Seamlessly visualize<br></br>quality intellectual capital without superior.</p>
                        <button className='invest-text__button'>Creat Account For Free</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
