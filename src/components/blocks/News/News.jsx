import React from 'react'

function News() {
    return (
        <section className='news'>
            <h2 className='news__header'>Browse our latest <b className='news__header--articles'>Articles</b></h2>
            <ul className='news__list news-list'>
                <li className='news-list__item news-item'>
                    <img className='news-item__image' src="" alt="" />
                    <div className='news-item__info news-info'>
                        <p className='news-info__author'>John Carter</p>
                        <p className='news-info__date'>June 18,2022</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default News
