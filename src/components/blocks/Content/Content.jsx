import React from 'react'
import ContentItem from '../../ui/ContentItem/ContentItem'
import './content.scss'

function Content() {
    return (
        <section className='content wrapper'>
            <div className='content__text content-text'>
                <div>
                    <h2 className='content-text__header'>We <b className='content-text__header--believe'>believe</b> buying crypto shouldn't be so hard</h2>
                </div>
                <div>
                    <p className='content-text__subheader'>Mission, Vision & Values</p>
                    <p className='content-text__description'>Since 2018 Cryptop has strived to bring professional financial services to the world of digital assets. Leveraging the best of the team's years of experience in FinTech along with the power of blockchain technology, Nexo empowers.</p>
                </div>
            </div>
            <ul className='content__list'>
                <ContentItem
                    header={"Mission"}
                    description={"Nexo is committed to successfully solving inefficiencies in the lending markets by creating By harnessing the potential behind blockchain."}
                    class={"content-item__header content-item__header--1"}
                />
                <ContentItem
                    header={"Vision"}
                    description={"Nexo is committed to successfully solving inefficiencies in the lending markets by creating By harnessing the potential behind blockchain."}
                    class={"content-item__header content-item__header--2"}
                />
                <ContentItem
                    header={"Values"}
                    description={"Nexo is committed to successfully solving inefficiencies in the lending markets by creating By harnessing the potential behind blockchain."}
                    class={"content-item__header content-item__header--3"}
                />
            </ul>
        </section>
    )
}

export default Content
