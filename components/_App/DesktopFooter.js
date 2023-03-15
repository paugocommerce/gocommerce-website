import React, {useState} from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const DesktopFooter = () => {

    const currentYear = new Date().getFullYear();
    const [style, setStyle] = useState({display: 'none'});

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row justify-content-center">
                    
                    <hr></hr>
                    <h2 className='footer-h2'>UNLEASH YOUR</h2>
                    <h1 className='footer-h1'>BRAND’S POTENTIAL</h1>

                    <Link href="/contact">
						<a className="grow-with-us text-center"  onMouseOver={e => {
                            setStyle({display: 'inline-block'});
                        }}
                        onMouseLeave={e => {
                            setStyle({display: 'none'})
                        }}>GROW WITH US<Icon.ArrowRight size={17} style={style}
                        
                       /></a>
					</Link>

                    

                    <div className="col-lg-12 col-md-12">
                        <div className="single-footer-widget">
                           
                            
                           
                            <ul className="social-links">
                                <li> 
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                    <img 
                                        src='/images/icon-facebook.png' 
                                        className="social-icon" 
                                        alt="man" 
                                    />
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" className="twitter" target="_blank">
                                    <img 
                                        src='/images/icon-linkedin.png' 
                                        className="social-icon" 
                                        alt="man" 
                                    />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagramcom/" className="instagram" target="_blank">
                                    <img 
                                        src='/images/icon-instagram.png' 
                                        className="social-icon" 
                                        alt="man" 
                                    />
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <hr className='footer-hr-end'></hr>

                 
                        <div className="row justify-content-center">
                        <div className="col-3 footer-end-menu text-center">
                            <p>Terms of Use</p>
                        </div>
                        <div className="col-3 footer-end-menu text-center">
                            <p>Privacy Policy</p>
                        </div>
                        <div className="col-3 footer-end-menu text-center">
                            <p>Copyright {currentYear} GoCommerce</p>
                        </div>
                        </div>
                    </div>
                
            </div>

            {/* <img src="/images/map.png" className="map" alt="map" /> */}

            {/* Shape Images */}
          
        </footer>
    )
     
}

export default DesktopFooter; 