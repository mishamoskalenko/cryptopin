import React from 'react'

function WorkItem(props) {
    return (
        <li className={props.class}>
            <h3 className='work-item__header'>{props.header}</h3>
            <p className='work-item__description'>{props.description}</p>
            <a className='work-item__link' href="#">{props.link}</a>
            <img className='work-item__image' src={props.image} alt="" width={302.989} height={300.9} />
        </li>
    )
}

export default React.memo(WorkItem)
