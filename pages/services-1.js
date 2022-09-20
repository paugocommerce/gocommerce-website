import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 5,
    loop: false,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: false,
    smartSpeed: 1000,
    stagePadding: 30,
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

 
const Services1 = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            

            <div className="services-page pt-80 pb-50 ">
                <div className="container">
                    <div className="section-title">
                        <h2 className='services-page-main'><span>Our Services</span></h2>
                        <h2 className='services-page-title'>Enterprise Services at GoCommerce</h2>
                        <p className='services-page-desc'>
                        GoCommerce is more than a technology platform — it’s backed by a team of ecommerce experts driven to see your business maximize success, from one stage of growth to the next, providing the strategy, support, and tools to get you there.</p>
                    </div>

                    
                    {display ? <OwlCarousel 
                        className="team-slider owl-carousel owl-theme owl-theme-style"
                        {...options}
                    > 

                    <div class="row">
                    <div class="col-md-2 col-4">
                    <img 
                        src='/images/services-slider-image-1.png'
                        className='branding' 
                        alt="branding" 
                                    />
                    </div>
                    <div class="col-md-10 col-8 slider-container">
                        <h6 className='slider-title'>BRANDING</h6>
                        <p className='slider-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-2 col-4">
                    <img 
                        src='/images/services-slider-image-1.png'
                        className='branding' 
                        alt="branding" 
                                    />
                    </div>
                    <div class="col-md-10 col-8 slider-container">
                        <h6 className='slider-title'>BRANDING</h6>
                        <p className='slider-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    </OwlCarousel> : ''}
                    <div className='services-card'>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/services-image.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     GOCOMMERCE BRAND
                                            
                                        </h3>
                                        <p className='services-image-desc'>Ominichannel Ecommerce Management, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/services-image-2.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     GOCOM X
                                            
                                        </h3>
                                        <p className='services-image-desc'>Performance and In Platform Marketing Livestream and Design Lab</p>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/services-images-3.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     the trusted name in order fulfillment
                                            
                                        </h3>
                                        <p className='services-image-desc'>5-star actual consumer feedback in Lazada and Shopee on great order fulfillment experiences as of June 2021 for eCommerce online orders. Highlighting Secure Storage
Order Fulfillment Automation, Mid-Mile Logistics, and Last Mile Delivery</p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Services1;