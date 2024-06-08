import React from 'react'

function TestimonialItem(props) {
    return (
        <li className={props.class}>
            <div className='testimonial-item__wrapper'>
                <div className='testimonial-item__avatar testimonial-item-avatar'>
                    <img className='testimonial-item-avatar__image' src={props.image} alt="" />
                    <div>
                        <p className='testimonial-item-avatar__name'>{props.avatarName}</p>
                        <p className='testimonial-item-avatar__username'>{props.avatarUsername}</p>
                    </div>
                </div>
                <img src={props.imageStars} alt="" />
            </div>
            <p className='testimonial-item__description'>“Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate Collaboratively administrate turnkey<br></br>channels whereasfully researched.</p>
        </li>
    )
}

export default TestimonialItem
