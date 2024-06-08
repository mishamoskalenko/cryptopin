import React from 'react'

function WhyusItem(props) {
    return (
        <li className='why-list__item why-list-item'>
            <img className='why-list-item__image' src={props.image} alt="" />
            <h3 className={props.class}>{props.header}</h3>
            <p className='why-list-item__description'>{props.description}</p>
        </li>
    )
}

export default WhyusItem
