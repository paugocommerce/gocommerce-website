import React from 'react';
import Navbar from "@/components/_App/Navbar";
import OmniChannel from "@/components/ITStartup/OmniChannel";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import OurMission from "@/components/ITStartup/OurMission";

const About1 = () => {
    return (
        <>
            <Navbar />

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

            <OmniChannel />
            <OurMission />
            
            
            <Footer />
        </>
    )
}

export default About1;