import React from 'react'
import "./whyus.scss"
import whyus1 from "../../../images/whyus-1.svg"
import whyus2 from "../../../images/whyus-2.svg"
import whyus3 from "../../../images/whyus-3.svg"
import whyus4 from "../../../images/whyus-4.svg"
import whyus5 from "../../../images/whyus-5.svg"
import whyus6 from "../../../images/whyus-6.svg"
import WhyusItem from '../../ui/WhyusItem/WhyusItem'


function Whyus() {
    return (
        <section className='why wrapper'>
            <h2 className='why__header'>Fully featured to buy, trade and<br></br>invest in <b className='why__header--cryptop'>Cryptop</b></h2>
            <ul className='why__list why-list'>
                <WhyusItem
                    header="Real-time trading"
                    description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    image={whyus1}
                    class={"why-list-item__header why-list-item__header--1"}
                />
                <WhyusItem
                    header="Easy to create wallet"
                    description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    image={whyus2}
                    class={"why-list-item__header why-list-item__header--2"}
                />
                <WhyusItem
                    header="Safe & secure"
                    description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    image={whyus3}
                    class={"why-list-item__header why-list-item__header--3"}
                />
                <WhyusItem
                    header="Super Fast KYC"
                    description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    image={whyus4}
                    class={"why-list-item__header why-list-item__header--4"}
                />
                <WhyusItem
                    header="Send & receive anytime"
                    description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    image={whyus5}
                    class={"why-list-item__header why-list-item__header--5"}
                />
                <WhyusItem
                    header="Reports & analytics"
                    description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    image={whyus6}
                    class={"why-list-item__header why-list-item__header--6"}
                />
            </ul>
            <div className='why__list-buttons why-list-buttons'>
                <button className='why-list-buttons__1'>Get Started</button>
                <button className='why-list-buttons__2'>View More</button>
            </div>
        </section>
    )
}

export default Whyus









