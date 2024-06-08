import React from 'react'
import "./prosses.scss"
import prossesImage from "../../../images/prosses-image.png"
import ProssesItem from '../../ui/ProssesItem/ProssesItem'

function Prosses() {
    return (
        <section className='prosses'>
            <div className='wrapper'>
                <h2 className='prosses__header'>Become a <b className='prosses__header--crypto'>Crypto</b> trader in seconds</h2>
                <div className='prosses__wrapper '>
                    <div className='prosses__image'>
                        <img src={prossesImage} alt="" />
                    </div>
                    <div className='prosses__text'>
                        <ul className='prosses__list prosses-list'>
                            <ProssesItem
                                header="Learn crypto"
                                description="Completely synergize resource taxing niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically."
                                classheader={"prosses-list-item__header prosses-list-item__header--1"}
                                classdescription={"prosses-list-item__description prosses-list-item__description--1"}
                            />
                            <ProssesItem
                                header="Buy crypto"
                                description="Completely synergize resource taxing niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically."
                                classheader={"prosses-list-item__header prosses-list-item__header--2"}
                                classdescription={"prosses-list-item__description prosses-list-item__description--2"}
                            />
                            <ProssesItem
                                header="Trade anywhere"
                                description="Completely synergize resource taxing niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically."
                                classheader={"prosses-list-item__header prosses-list-item__header--3"}
                                classdescription={"prosses-list-item__description prosses-list-item__description--3"}
                            />
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Prosses
