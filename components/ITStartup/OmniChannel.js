import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const options = {
    items: 5,
    loop: false,
    nav: true,
    dots: false,
    margin: 15,
    autoplay: false,
    navText : ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    smartSpeed: 1000,
    
   
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}


const OmniChannel = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        isMobile ? <div className="omnichannel-area ">
            <div className="container">
                <div className="section-title">
                    
                    
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>Omni-Channel</h1>
                    <img 
                        src='/images/omnichannel-image.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                                    />
                    <h2 className='gocom-omnichannel-title'>eCommerce Operations</h2>
                    <p className='gocom-omnichannel-desc'>We build stores, create content and mange the efficient operations of your brand stores across multiple channels</p>
                </div>
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>Social Commerce</h1>
                    <img 
                        src='/images/omnichannel-image2.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                                    />
                        <h2 className='gocom-omnichannel-title'>Performance Marketing</h2>
                        <p className='gocom-omnichannel-desc'>We mount marketing campaigns that use the latest Socail Media and In-platform tools to build meaningful traffic, engagement, and sales for your brand.</p>
                </div>
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>ShipGo</h1>
                    <img 
                        src='/images/omnichannel-image3.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                    />
                    <h2 className='gocom-omnichannel-title'>eCommerce Fulfillment</h2>
                    <p className='gocom-omnichannel-desc'>We safely store your inventory; then we rapidly pick, pack and dispatch every order to ensure customer delight.</p>
                </div>
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>Business Intelligence</h1>
                    <img 
                        src='/images/omnichannel-image4.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                    />
                    <h2 className='gocom-omnichannel-title'>Data Analytics</h2>
                    <p className='gocom-omnichannel-desc'>We give you timely reports that show and highlight our data driven approach.</p>
                            
                </div>
            
                
    
                
            </OwlCarousel> : ''}
            <hr className='omnichannel-hr-end'></hr>
        </div>: <div></div>
    )


}

export default OmniChannel;