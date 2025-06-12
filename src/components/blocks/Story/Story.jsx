import React from 'react'
import './story.scss'
import story from '../../../images/story.svg'

function Story() {
  return (
    <section className='story wrapper'>
      <h1 className='story__title'>The <b className='story__title--story'>Story</b></h1>
      <p className='story__subtitle'>A Story Of Money And The Future Of Banking</p>
      <p className='story__description'>Discover the evolution of finance, from traditional banking to the rise of cryptocurrencies. Learn how decentralized technologies are shaping the future of money, offering greater transparency, security, and accessibility for everyone.</p>
      <img className='story__image' src={story} alt="" />
    </section>
  )
}

export default Story
