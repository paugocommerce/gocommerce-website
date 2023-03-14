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
                    <p className='gocom-omnichannel-desc'>We’re here to help you grow your business. We aim to build more shops, create more content, and manage the efficient operations of your stores across multiple channels. Our commercial, creative and marketing teams work together to execute your vision and mission as a company and increase your brand's visibility.</p>
                </div>
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>Social Commerce</h1>
                    <img 
                        src='/images/omnichannel-image2.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                                    />
                        <h2 className='gocom-omnichannel-title'>Performance Marketing</h2>
                        <p className='gocom-omnichannel-desc'>We create marketing campaigns that don't just drive traffic but also attract meaningful engagement for your brand. You get access to the latest social media advertising tools that help you connect with your target market and elevate your business to greater heights.</p>
                </div>
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>ShipGo</h1>
                    <img 
                        src='/images/omnichannel-image3.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                    />
                    <h2 className='gocom-omnichannel-title'>eCommerce Fulfillment</h2>
                    <p className='gocom-omnichannel-desc'>We follow a simple but efficient process of ensuring orders are picked, packed, and dispatched quickly. Our ShipGo service is complete with a safe and secure inventory and is designed to meet your needs to save money, time, and other resources without sacrificing quality.</p>
                </div>
                <div className="single-team">
                    <h1 className='gocom-omnichannel'>Business Intelligence</h1>
                    <img 
                        src='/images/omnichannel-image4.png'
                        className='omnichannel-image' 
                        alt="lazada-award" 
                    />
                    <h2 className='gocom-omnichannel-title'>Data Analytics</h2>
                    <p className='gocom-omnichannel-desc'>We take a data-driven approach to everything we do. We provide reports that are detailed and insightful as to how your business is doing, the areas that need attention, and how to improve the services you provide.</p>
                            
                </div>
            
                
    
                
            </OwlCarousel> : ''}
            <hr className='omnichannel-hr-end'></hr>
        </div>: <div></div>
    )


}

export default OmniChannel;