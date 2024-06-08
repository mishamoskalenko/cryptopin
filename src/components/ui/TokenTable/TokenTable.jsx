import React from 'react'
import './tokentable.scss'
import TokenList from '../TokenList/TokenList';


function TokenTable() {
    return (
        <section className='tokentable' >
            <div className='tokentable__info tokentable-info'>
                <ul className='tokentable-info__list tokentable-list'>
                    <li className='tokentable-list__item tokentable-item__name'>Name</li>
                    <li className='tokentable-list__item tokentable-item__price'>Price</li>
                    <li className='tokentable-list__item tokentable-item__change'>24h Change</li>
                    <li className='tokentable-list__item tokentable-item__volume'>Volume</li>
                    <li className='tokentable-list__item tokentable-item__cap'>Market Cap</li>
                    <li className='tokentable-list__item tokentable-item__info'>Info</li>
                </ul>
            </div>
            <div className='tokentable__price tokentable-price'>
                <TokenList/>
            </div>
        </section>
    )
}

export default TokenTable

