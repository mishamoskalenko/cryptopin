import React, { useState } from 'react'
import "../Header/header.scss"
import logo from "../../../images/logo.svg"
import { Link } from 'react-router-dom';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className='header'>
            <div className='header__banner header-banner'>
                <p className='header-banner__text'>Buy & Sell Bitcoin, Ethereum and 100+ cryptos in minutes. Register now & get 100$ cashback on your first trade of 500$ or more!</p>
            </div>
            <nav className='header__nav nav wrapper'>
                <Link to={'/'}>
                    <img className='header__logo' src={logo} alt="logo" />
                </Link>
                <button onClick={toggleNav} className={`nav__button ${isNavOpen ? "nav__button--opened" : "nav__button--closed"}`}>
                    <span className="visually-hidden">Open menu</span>
                </button>
                <ul className={`nav__list nav-list ${isNavOpen ? "nav__list--opened" : "nav__list--closed"}`}>
                    <li className='nav-list__item'>
                        <Link className='nav-list__link' to={`/`}>Home</Link>
                    </li>
                    <li className='nav-list__item nav-list__arrow'>
                        <Link className='nav-list__link' to={`/about`}>About</Link>
                    </li>
                    <li className='nav-list__item nav-list__arrow'>
                        <Link className='nav-list__link' to={`/token`}>Token</Link>
                    </li>
                    <li className='nav-list__item'>
                        <Link className='nav-list__link' to={`/pages`}>Pages</Link>
                    </li>
                    <li className='nav-list__item'>
                        <Link className='nav-list__link' to={`/pricing`}>Content</Link>
                    </li>
                    <li>
                        <Link className='nav-list__button' to={`/login`}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
