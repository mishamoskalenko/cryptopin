import React from 'react'

function ProssesItem(props) {
    return (
        <li className='prosses-list__item prosses-list-item'>
            <h3 className={props.classheader}>{props.header}</h3>
            <p className={props.classdescription}>{props.description}</p>
        </li>
    )
}

export default ProssesItem
