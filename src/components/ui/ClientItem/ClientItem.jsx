import React from 'react'

function ClientItem(props) {
  return (
    <li className='client-list__item'>
      <img src={props.image} alt="" />
    </li>
  )
}

export default ClientItem
