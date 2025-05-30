import logo from "../../../images/logo.svg"
import "../Footer/footer.scss"
import { ReactComponent as InstagramSvg } from '../../../images/social/instagram.svg';
import { ReactComponent as FacebookSvg } from '../../../images/social/facebook.svg';
import { ReactComponent as TwitterSvg } from '../../../images/social/twitter.svg';
import { ReactComponent as LinkedinkSvg } from '../../../images/social/linkedin.svg';
import { ReactComponent as YoutubeSvg } from '../../../images/social/youtube.svg';
import { ReactComponent as RedditSvg } from '../../../images/social/reddit.svg';

function Footer() {
    return (
        <footer className='footer wrapper'>
            <div className='footer__wrapper'>
                <div className='footer__about footer-about'>
                    <img className='footer-about__image' src={logo} alt="" />
                    <p className='footer-about__description'>Completely synergize resource taxing niche markets. Professionally cultivate service with robust ideas. Dynamically.</p>
                </div>
                <div className='footer__follow follow'>
                    <p className='follow__description'>Follow Us :</p>
                    <ul className='follow__list follow-list'>
                        <li>
                            <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
                                <InstagramSvg className='follow__list--svg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                                <FacebookSvg className='follow__list--svg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com" target='_blank' rel="noreferrer">
                                <TwitterSvg className='follow__list--svg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                                <LinkedinkSvg className='follow__list--svg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target='_blank' rel="noreferrer">
                                <YoutubeSvg className='follow__list--svg' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/" target='_blank' rel="noreferrer">
                                <RedditSvg className='follow__list--svg' alt="reddit" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__sub footer-sub'>
                <ul className='footer-sub__list footer-list'>
                    <li className='footer-list__item'>
                        <h3 className='footer-list__header'>Company</h3>
                    </li>
                    <li className='footer-list__item'>Home</li>
                    <li className='footer-list__item'>About</li>
                    <li className='footer-list__item'>Contact</li>
                    <li className='footer-list__item'>Blog</li>
                    <li className='footer-list__item'>Blog Post</li>
                    <li className='footer-list__item'>Pricing</li>
                    <li className='footer-list__item'>Pricing Single</li>
                    <li className='footer-list__item'>Tokens</li>
                    <li className='footer-list__item'>Tokens Single</li>
                </ul>
                <ul className='footer-sub__list footer-list'>
                    <li className='footer-list__item'>
                        <h3 className='footer-list__header'>Legal</h3>
                    </li>
                    <li className='footer-list__item'>Privacy Policy</li>
                    <li className='footer-list__item'>Terms & Conditions</li>
                    <li className='footer-list__item'>Wallet Terms</li>
                    <li className='footer-list__item'>Borrow Terms</li>
                    <li className='footer-list__item'>Earn Terms</li>
                    <li className='footer-list__item'>Exchange Terms</li>
                    <li className='footer-list__item'>Nexo Card Terms</li>
                    <li className='footer-list__item'>Affiliate Terms</li>
                    <li className='footer-list__item'>Cookies Policy</li>

                </ul>
                <ul className='footer-sub__list footer-list'>
                    <li className='footer-list__item'>
                        <h3 className='footer-list__header'>Cryptos</h3>
                    </li>
                    <li className='footer-list__item'>What is Crypto</li>
                    <li className='footer-list__item'>Bitcoin</li>
                    <li className='footer-list__item'>Ether</li>
                    <li className='footer-list__item'>XRP</li>
                    <li className='footer-list__item'>Tether</li>
                    <li className='footer-list__item'>EOS</li>
                    <li className='footer-list__item'>BAT</li>
                    <li className='footer-list__item'>Chainlink</li>
                </ul>
                <ul>
                    <li className='footer-list__item'>
                        <h3 className='footer-list__header'>Registered office address</h3>
                    </li>
                    <p className='footer-list__description footer-list__description--1'>Registered office address: Awlencan Innovations India Limited [CIN no. U104448], Opposite Doordarshan T.V. Tower, Drive-In Road, Thaltej, NY 380054</p>
                    <p className='footer-list__description footer-list__description--2'>In case of any query, please Mail <b className='footer-list__description--bold'>Trade@cryptop.com</b> Or <b className='footer-list__description--bold'>(011) 65444 00025</b></p>
                    <p className='footer-list__disclaimer'><b className='footer-list__disclaimer--bold'>Disclaimer</b>: Trading in Cryptocurrencies Are Subject To Market, Technical And Legal Risks.The Prices Fluctuate Based On Local Demand And Supply</p>
                </ul>
            </div>
            <p className='footer__copyright'>Copyright © Cryptop | Designed by VictorFlow Templates - Powered by Webflow</p>
        </footer>
    )
}

export default Footer
