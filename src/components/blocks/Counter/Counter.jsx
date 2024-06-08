import React from 'react'
import './counter.scss'

function Counter() {
    return (
        <section className='counter wrapper'>
            <ul className='counter__list counter-list'>
                <li className='counter-list__item counter-item'>
                    <p className='counter-item__header'>$3.4B</p>
                    <p className='counter-item__description'>Valuation</p>
                </li>
                <li className='counter-list__item'>
                    <p className='counter-item__header'>$2B+</p>
                    <p className='counter-item__description'>Crypto delivered</p>
                </li>
                <li className='counter-list__item'>
                    <p className='counter-item__header'>1700%+</p>
                    <p className='counter-item__description'>Growth</p>
                </li>
                <li className='counter-list__item'>
                    <p className='counter-item__header'>5M+</p>
                    <p className='counter-item__description'>Customers</p>
                </li>
                <li className='counter-list__item'>
                    <p className='counter-item__header'>80+</p>
                    <p className='counter-item__description'>Assets supported</p>
                </li>
            </ul>
        </section>
    )
}

export default Counter
