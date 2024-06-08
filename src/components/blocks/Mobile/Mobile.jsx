import React from 'react'
import "../Mobile/mobile.scss"
import iosImage from "../../../images/mobile-ios.svg"
import androidImage from "../../../images/mobile-android.svg"
import qrcodeImage from "../../../images/mobile-qrcode.svg"
import mobileImage from "../../../images/mobile-image.png"

function Mobile() {
    return (
        <section className='mobile'>
            <div className='mobile__wrapper wrapper'>
                <div className='mobile__text'>
                    <h2 className='mobile__header'>Try The Future, Today. Download <b className='mobile__header--cryptop'>Cryptop</b></h2>
                    <p className='mobile__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit</p>
                    <div className='mobile__scan'>
                        <div className='mobile__qr mobile-qr'>
                            <img src={qrcodeImage} alt="" />
                            <div>
                                <p className='mobile-qr__description'>Scan to Download</p>
                                <p className='mobile-qr__os'>iOS & Android</p>
                            </div>
                        </div>
                        <div className='mobile__os'>
                            <img src={iosImage} alt="" />
                            <img src={androidImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mobile__image'>
                    <img src={mobileImage} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Mobile
