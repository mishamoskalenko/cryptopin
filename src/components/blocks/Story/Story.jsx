import React from 'react'
import './story.scss'
import story from '../../../images/story.svg'

function Story() {
  return (
    <section className='story wrapper'>
      <h1 className='story__title'>The <b className='story__title--story'>Story</b></h1>
      <p className='story__subtitle'>A Story Of Money And The Future Of Banking</p>
      <p className='story__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua ut dolor sit.</p>
      <img className='story__image' src={story} alt="" />
    </section>
  )
}

export default Story
