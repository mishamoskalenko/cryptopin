import React from 'react'
import './contentItem.scss'

function ContentItem(props) {
    return (
        <li className="content-item">
            <h3 className={props.class}>{props.header}</h3>
            <p className='content-item__description'>{props.description}</p>
        </li>
    )
}

export default ContentItem
