import React from 'react'
import './teamItem.scss'

function TeamItem(props) {
    return (
        <li className='teamitem'>
            <img className='teamitem__image' src={props.image} alt="" />
            <p className='teamitem__header'>{props.header}</p>
            <p className='teamitem__description'>{props.description}</p>
        </li>
    )
}

export default TeamItem
