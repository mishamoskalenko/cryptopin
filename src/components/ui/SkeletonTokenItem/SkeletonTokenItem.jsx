import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonTokenItem() {
    return (
        <div className="tokenitem">
            <ul className='tokenitem__list tokenitem-list'>
                <div className='tokenitem-list__name'>
                    <Skeleton className="tokenitem-item tokenitem-item__image" circle={true} height={40} width={40} />
                    <Skeleton className="tokenitem-item tokenitem-item__title" width={37} />
                    <Skeleton className="tokenitem-item tokenitem-item__description" width={65} />
                </div>
                <Skeleton className='tokenitem-item tokenitem-item__price' width={110} />
                <Skeleton className='tokenitem-item tokenitem-item__change' width={59} />
                <Skeleton className='tokenitem-item tokenitem-item__volume' width={110} />
                <Skeleton className='tokenitem-item tokenitem-item__cap' width={108} />
                <Skeleton className='tokenitem-item tokenitem-item__detail' width={44} />
            </ul>
        </div>
    )
}

export default React.memo(SkeletonTokenItem)
