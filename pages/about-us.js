import React from 'react';
import dynamic from 'next/dynamic';

const mobile = require('is-mobile');

const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentOmniChannel = dynamic(() => mobile() ? import('@/components/ITStartup/OmniChannel'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentOurMission = dynamic(() => mobile() ? import('@/components/ITStartup/OurMission'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopBlank'), { ssr: false })

const About1 = () => {
    return (
        <>
            <MobileContentNavbar />

            {/* <PageBanner pageTitle="About Us" /> */}

            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 about-us-image">
                            <div className="about-image">
                                <img src="/images/gocom-management.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 about-content-container">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2 className='about-us-title'><span>Our Story</span></h2>

                                    <h1 className='story-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                    
                                    <p className='about-us-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                                    <br/><p className='about-us-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

            <MobileContentOmniChannel />
            <MobileContentOurMission />
            
            
            <MobileContentFooter />
        </>
    )
}

export default About1;