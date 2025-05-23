import React from 'react'
import chart1 from "../../../images/chart-1.svg"
import chart2 from "../../../images/chart-2.svg"
import chart3 from "../../../images/chart-3.svg"
import chart4 from "../../../images/chart-4.svg"
import "./about.scss"
import { Link } from 'react-router-dom'


function About() {
    return (
        <section className='about'>
            <div className='about__wrapper wrapper'>
                <div className='about__text'>
                    <h2 className='about__header'>Explore endless possibilities with <b className='about__header--cryptop'>Cryptop</b></h2>
                    <p className='about__description'>Discover the future of cryptocurrency investing with our cutting-edge platform. Access real-time market data, automated trading strategies, and expert insights to maximize your investment potential.</p>
                    <ul className='about__list about-list'>
                        <li className='about-list__item about-list__item--support'>24/7 Support</li>
                        <li className='about-list__item about-list__item--secured'>99% Secured</li>
                    </ul>
                    <Link to="/token" className='about__button'>Get Started</Link>
                </div>
                <div className='about__chart chart'>
                    <ul className='chart__buttons chart-buttons'>
                        <li className='chart-buttons__item'>
                            <button className='chart-buttons__button'>Active</button>
                        </li>
                        <li className='chart-buttons__item'>
                            <button className='chart-buttons__button'>Gainers</button>
                        </li>
                        <li className='chart-buttons__item'>
                            <button className='chart-buttons__button'>Losers</button>
                        </li>
                    </ul>
                    <ul className='chart__list chart-list'>
                        <li className='chart-list__item chart-item chart-item--1'>
                            <img className="chart-item__image" src={chart1} alt="" />
                            <div className='chart-item__text chart-item__text--1'>
                                <p className='chart-item__header'>Amt*</p>
                                <p className='chart-item__description'>Advanced Micro Tech</p>
                            </div>
                            <p className='chart-item__price'>98.5</p>
                            <div className='chart-item__change'>
                                <p>+6.58%</p>
                                <p>+3.10</p>
                            </div>
                        </li>
                        <li className='chart-list__item chart-item chart-item--2'>
                            <img className="chart-item__image" src={chart2} alt="" />
                            <div className='chart-item__text chart-item__text--2'>
                                <p className='chart-item__header'>Nvda*</p>
                                <p className='chart-item__description'>NVDA Corporation</p>
                            </div>
                            <p className='chart-item__price'>125.6</p>
                            <div className='chart-item__change'>
                                <p>+6.56%</p>
                                <p>+7.10</p>
                            </div>
                        </li>
                        <li className='chart-list__item chart-item chart-item--3'>
                            <img className="chart-item__image" src={chart3} alt="" />
                            <div className='chart-item__text chart-item__text--3'>
                                <p className='chart-item__header'>Apl*</p>
                                <p className='chart-item__description'>Applee INC Compnay</p>
                            </div>
                            <p className='chart-item__price'>120.3</p>
                            <div className='chart-item__change'>
                                <p>+4.68%</p>
                                <p>+6.10</p>
                            </div>
                        </li>
                        <li className='chart-list__item chart-item chart-item--4'>
                            <img className="chart-item__image" src={chart4} alt="" />
                            <div className='chart-item__text chart-item__text--4'>
                                <p className='chart-item__header'>Plystr*</p>
                                <p className='chart-item__description'>Online market</p>
                            </div>
                            <p className='chart-item__price'>562.5</p>
                            <div className='chart-item__change'>
                                <p>+7.58%</p>
                                <p>+9.10</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
