import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';




const OmniChannel = () => {
   

    return (
         <div className="omnichannel-area ">
            <div className="container">
                
            

           
            <div className="row justify-content-center logo-container">
                    <img 
                            src='/images/omnichannel-line.png'
                            className='omnichannel-line' 
                            alt="line" 
                                        />
                <div className="col-lg-3 col-md-3 col-4 brand-logo omnichannel-1  text-center">
                    <div className="single-team">
                        <h1 className='gocom-omnichannel text-center'>Omni-Channel</h1>
                        <img 
                            src='/images/omnichannel-image.png'
                            className='omnichannel-image p-3' 
                            alt="lazada-award" 
                                        />
                        <h2 className='gocom-omnichannel-title'>ECOMMERCE OPERATIONS</h2>
                        <p className='gocom-omnichannel-desc'>We’re here to help you grow your business. We aim to build more shops, create more content, and manage the efficient operations of your stores across multiple channels. Our commercial, creative and marketing teams work together to execute your vision and mission as a company and increase your brand's visibility.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 brand-logo  text-center">
                    <div className="single-team">
                        <h1 className='gocom-omnichannel text-center'>Social Commerce</h1>
                        <img 
                            src='/images/omnichannel-image2.png'
                            className='omnichannel-image p-3' 
                            alt="lazada-award" 
                                        />
                            <h2 className='gocom-omnichannel-title'>PERFORMANCE MARKETING</h2>
                            <p className='gocom-omnichannel-desc'>We create marketing campaigns that don't just drive traffic but also attract meaningful engagement for your brand. You get access to the latest social media advertising tools that help you connect with your target market and elevate your business to greater heights.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 brand-logo  text-center">
                    <div className="single-team"> 
                        <h1 className='gocom-omnichannel text-center'>ShipGo</h1>
                        <img 
                            src='/images/omnichannel-image3.png'
                            className='omnichannel-image p-3' 
                            alt="lazada-award" 
                        />
                        <h2 className='gocom-omnichannel-title'>ECOMMERCE FULFILLMENT</h2>
                        <p className='gocom-omnichannel-desc'>We follow a simple but efficient process of ensuring orders are picked, packed, and dispatched quickly. Our ShipGo service is complete with a safe and secure inventory and is designed to meet your needs to save money, time, and other resources without sacrificing quality.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 brand-logo omnichannel-1  text-center">
                    <div className="single-team">
                        <h1 className='gocom-omnichannel text-center'>Business Intelligence</h1>
                        <img 
                            src='/images/omnichannel-image4.png'
                            className='omnichannel-image p-3' 
                            alt="lazada-award" 
                        />
                        <h2 className='gocom-omnichannel-title'>DATA ANALYTICS</h2>
                        <p className='gocom-omnichannel-desc'>We take a data-driven approach to everything we do. We provide reports that are detailed and insightful as to how your business is doing, the areas that need attention, and how to improve the services you provide.</p>
                                
                    </div>
                    </div>
                </div>
                <hr className='omnichannel-hr-end'></hr>
            
                </div>
    
                
           
            
        </div>
    )


}

export default OmniChannel;