import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonTokenItem({ isEven }) {
    const itemClassName = `tokenitem ${isEven ? 'tokenitem--even' : ''}`;

    return (
        <div className={itemClassName}>
            <ul className='tokenitem__list tokenitem-list'>
                <div className='tokenitem-list__name'>
                    <li className='tokenitem-item tokenitem-item__image'>
                        <Skeleton circle={true} height={30} width={30} />
                    </li>
                    <li className='tokenitem-item tokenitem-item__title'>
                        <Skeleton width={40} />
                    </li>
                    <li className='tokenitem-item tokenitem-item__description'>
                        <Skeleton width={80} />
                    </li>
                </div>
                <li className='tokenitem-item tokenitem-item__price'>
                    <Skeleton width={100} />
                </li>
                <li className='tokenitem-item tokenitem-item__change'>
                    <Skeleton width={70} />
                </li>
                <li className='tokenitem-item tokenitem-item__volume'>
                    <Skeleton width={120} />
                </li>
                <li className='tokenitem-item tokenitem-item__cap'>
                    <Skeleton width={120} />
                </li>
                <li className='tokenitem-item tokenitem-item__detail'>
                    <Skeleton width={50} />
                </li>
            </ul>
        </div>
    )
}

export default React.memo(SkeletonTokenItem)
