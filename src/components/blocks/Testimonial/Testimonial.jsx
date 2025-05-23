import React from 'react'
import "./testimonial.scss"
import testimonialImage1 from "../../../images/testimonial-1.png"
import testimonialImage2 from "../../../images/testimonial-2.png"
import testimonialImage3 from "../../../images/testimonial-3.png"
import testimonialImage4 from "../../../images/testimonial-4.png"
import testimonialStarsImage from "../../../images/testimonial-stars.svg"
import TestimonialItem from "../../ui/TestimonialItem/TestimonialItem"

function Testimonial() {
    return (
        <section className='testimonial wrapper'>
            <div className='testimonial__text testimonial-text'>
                <h2 className='testimonial-text__header'>What Our Clients Say <b className='testimonial-text__header--about'>About</b> us</h2>
                <p className='testimonial-text__description'>Join thousands of satisfied users who have transformed their crypto investment journey with our platform. Read what our community has to say about their experience with Cryptop.</p>
            </div>
            <div className='testimonial__list'>
                <ul className='testimonial-list'>
                    <TestimonialItem
                        class={"testimonial-list__item testimonial-item testimonial-item--1"}
                        image={testimonialImage1}
                        avatarName="Michael Scott"
                        avatarUsername="@Trader"
                        imageStars={testimonialStarsImage}
                    />
                    <TestimonialItem
                        class={"testimonial-list__item testimonial-item testimonial-item--2"}
                        image={testimonialImage2}
                        avatarName="Sylvester Stallone"
                        avatarUsername="@Manager"
                        imageStars={testimonialStarsImage}
                    />
                    <TestimonialItem
                        class={"testimonial-list__item testimonial-item testimonial-item--3"}
                        image={testimonialImage3}
                        avatarName="Sophie Moore"
                        avatarUsername="@Condent Writer"
                        imageStars={testimonialStarsImage}
                    />
                    <TestimonialItem
                        class={"testimonial-list__item testimonial-item testimonial-item--4"}
                        image={testimonialImage4}
                        avatarName="John Carter"
                        avatarUsername="@Condent Writer"
                        imageStars={testimonialStarsImage}
                    />
                </ul>
            </div>
        </section>
    )
}

export default Testimonial
