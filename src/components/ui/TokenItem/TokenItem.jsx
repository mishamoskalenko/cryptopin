import './tokenitem.scss'
import { Link } from 'react-router-dom'


function TokenItem(props) {
    return (
        <div className="tokenitem">
            <ul className='tokenitem__list tokenitem-list'>
                <div className='tokenitem-list__name'>
                    <li className='tokenitem-item tokenitem-item__image'>
                        <img className='tokenitem-item tokenitem-item__image' src={props.image} alt={props.id} />
                    </li>
                    <li className='tokenitem-item tokenitem-item__title'>{props.title}</li>
                    <li className='tokenitem-item tokenitem-item__description'>{props.description}</li>
                </div>
                <li className='tokenitem-item tokenitem-item__price'>{props.price}</li>
                <li className={`tokenitem-item tokenitem-item__change ${props.changeColor}`}>{props.change}</li>
                <li className='tokenitem-item tokenitem-item__volume'>{props.volume}</li>
                <li className='tokenitem-item tokenitem-item__cap'>{props.cap}</li>
                <li className='tokenitem-item tokenitem-item__detail'>
                    <Link className='tokenitem-item__detail' to={`/token/${props.id}`} target='_blank'>Detail</Link>
                </li>
            </ul>
        </div>
    )
}

export default TokenItem
