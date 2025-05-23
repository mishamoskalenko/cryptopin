import React from 'react'
import "./product.scss"
import investImage from "../../../images/invest.svg";
import { Link } from 'react-router-dom';

function Product() {
    return (
        <section className='product wrapper'>
            <div className='product__sub product-sub'>
                <p className='product-sub__description'>Take control of your financial future with our comprehensive investment platform. Choose from a wide range of options.</p>
                <Link className='product-sub__button' to={`/about`}>Get Started</Link>
            </div>
            <div className='product__stock stock'>
                <div className='stock__text'>
                    <h2 className='stock__header'>Your Money...Your Choice</h2>
                    <p className='stock__description'>Diversify your portfolio with our extensive selections.</p>
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
                        <p className='invest-text__description'>Access a diverse range of investment opportunities with our platform. From stocks and crypto to fixed deposits, we provide the tools and insights you need to build a robust investment portfolio.</p>
                        <Link className='invest-text__button' to={`/login`}>Creat Account For Free</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
