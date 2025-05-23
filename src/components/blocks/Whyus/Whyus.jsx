import React from 'react'
import "./whyus.scss"
import whyus1 from "../../../images/whyus-1.svg"
import whyus2 from "../../../images/whyus-2.svg"
import whyus3 from "../../../images/whyus-3.svg"
import whyus4 from "../../../images/whyus-4.svg"
import whyus5 from "../../../images/whyus-5.svg"
import whyus6 from "../../../images/whyus-6.svg"
import WhyusItem from '../../ui/WhyusItem/WhyusItem'
import { Link } from 'react-router-dom'


function Whyus() {
    return (
        <section className='why wrapper'>
            <h2 className='why__header'>Fully featured to buy, trade and<br></br>invest in <b className='why__header--cryptop'>Cryptop</b></h2>
            <ul className='why__list why-list'>
                <WhyusItem
                    header="Real-time trading"
                    description="Execute trades instantly with our advanced trading engine. Monitor market movements and make informed decisions with real-time price updates and market analysis."
                    image={whyus1}
                    class={"why-list-item__header why-list-item__header--1"}
                />
                <WhyusItem
                    header="Easy to create wallet"
                    description="Set up your secure crypto wallet in minutes. Our user-friendly interface guides you through the process with step-by-step instructions and security best practices."
                    image={whyus2}
                    class={"why-list-item__header why-list-item__header--2"}
                />
                <WhyusItem
                    header="Safe & secure"
                    description="Your security is our top priority. Benefit from multi-layer encryption, cold storage solutions, and advanced security protocols to protect your digital assets."
                    image={whyus3}
                    class={"why-list-item__header why-list-item__header--3"}
                />
                <WhyusItem
                    header="Super Fast KYC"
                    description="Complete your identity verification in minutes. Our streamlined KYC process ensures quick approval while maintaining the highest security standards."
                    image={whyus4}
                    class={"why-list-item__header why-list-item__header--4"}
                />
                <WhyusItem
                    header="Send & receive anytime"
                    description="Transfer crypto assets 24/7 with instant processing. Enjoy low transaction fees and real-time tracking of your transfers across the globe."
                    image={whyus5}
                    class={"why-list-item__header why-list-item__header--5"}
                />
                <WhyusItem
                    header="Reports & analytics"
                    description="Access comprehensive portfolio analytics and detailed reports. Track your performance, analyze trends, and make data-driven investment decisions."
                    image={whyus6}
                    class={"why-list-item__header why-list-item__header--6"}
                />
            </ul>
            <div className='why__list-buttons why-list-buttons'>
                <Link className='why-list-buttons__1' to={`/about`}>Get Started</Link>
                <button className='why-list-buttons__2'>View More</button>
            </div>
        </section>
    )
}

export default Whyus









