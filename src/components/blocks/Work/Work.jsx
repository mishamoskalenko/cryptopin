import React from 'react'
import "./work.scss"
import work1 from "../../../images/work-1.svg"
import work2 from "../../../images/work-2.svg"
import work3 from "../../../images/work-3.svg"
import WorkItem from '../../ui/WorkItem/WorkItem';


function Work() {
    return (
        <section className='work wrapper'>
            <h2 className='work__header'>Invest & Grow your cryptocurrency <b className='work__header--portfolio'>Portfolio</b></h2>
            <ul className='work__list work-list'>
                <WorkItem
                    header="More than a typical crypto wallet"
                    description="Lorem ipsum dolor sit amet consect eturadipiscing eiusmod"
                    link="Read more"
                    image={work1}
                    class={"work-list__item work-item work-item--2"}
                />
                <li className='work-list__item work-item work-item--2'>
                    <img className='work-item__image work-item__image--2' src={work2} alt="" width={339.153} height={337.478} />
                    <h3 className='work-item__header work-item__header--2'>Grow your business with Binance Pay</h3>
                    <p className='work-item__description'>Lorem ipsum dolor sit amet consect eturadipiscing eiusmod</p>
                    <a className='work-item__link work-item__link--2' href="#">Read more</a>
                </li>
                <WorkItem
                    header="A crypto wallet from the future"
                    description="Lorem ipsum dolor sit amet consect eturadipiscing eiusmod"
                    link="Read more"
                    image={work3}
                    class={"work-list__item work-item work-item--3"}
                />
            </ul>
        </section>
    )
}

export default Work
