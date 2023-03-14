import React from 'react';
import Link from 'next/link';


const DesktopMarketingContent = () => {
    return (
        <>
        <div className="gocommercex-main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 ">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <img 
                                            src='/images/GoCommerce-Logo-Banner.png' 
                                            className='ship-go-image'
                                            alt="GoCommerce-Logo" 
                                        />
                                        <span className='ship-go'>Marketing</span>
                                    
                                        
                                        <Link href="/contact">
                                            <a className=" float-start ship-go-get-started">GROW WITH US</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
            
            <div className="services-page-gocom-x pt-80 pb-50 ">
                <div className="container">
                    <div className="section-title">
                        <h2 className='services-page-main-gocom-x'><span>GoCommerce Marketing</span></h2>
                        <p className='services-page-desc'>
                        GoCommerce Marketing is geared towards the close collaboration of all our teams with your brand and blend expertise across all channels to deliver quality output that is aimed at producing excellent results.
                        </p>
                        <p className='services-page-desc'>
                        From Conceptualization to Implementation & Optimization to Analysis, we look at every stage as an opportunity to learn and improve in our craft. Armored with technology, we find new ways to deliver satisfactory digital marketing collateral and discover upgrades to our services, including tapping into other exploratory platforms.
                        </p>
                        <p className='services-page-desc'>
                        We strive to build an effective system that will guarantee valuable insights and ever-evolving practices to ultimately scale up your business
                        </p>
                    </div>
                    <div className='services-card'>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/services-image.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     IN-PLATFORM MARKETING
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        We partner with the best eCommerce platforms in marketing your brand and products to the right audience. 
                                        </p>
                                        <p className='services-image-desc'>
                                        We represent your brand to find the best tailor-fit solutions to your business so we can reach a common goal of successfully acquiring, keeping, and growing your customers. 
                                        </p>
                                        <p className='services-image-desc'>
                                        Our journey with the growth of your brand is of utmost importance so we prioritize identifying possible challenges that may arise, including re-strategizing and exploring all available solutions in the platform. 
                                        </p>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/Performace-Marketing.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     PERFORMANCE MARKETING
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        We at GoCommerce, pride ourselves with providing the most optimal solution and strategy to the brands helping them achieve their objectives, whatever these may be. Ensuring along the way, that our partner brands are able to utilize all investments in the most efficient and effective manner, undertaking all necessary measures to thoroughly and comprehensively analyze the brand and the market. 
                                        </p>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/livecommerce.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                    LIVE COMMERCE
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        Businesses have long been latching on to Live Solutions to take their sales and businesses to the next level and get ahead of the competition. It is a fast emerging brand solution that enables quick and timely references for audiences to build awareness and over time, affinity to a certain brand or product.
                                        </p>
                                        <p className='services-image-desc'>
                                        GoCommerce has been helping brand partners continuously connect with their consumers so the consumers can watch, talk, engage with, and shop all from the comfort of their own homes or virtually in any location possible.
                                        </p>
                                        <p className='services-image-desc'>
                                        A dedicated team is responsible for planning, creating content, and executing live commerce that is customizable to each and every brand in our portfolio making each Live a truly memorable and profitable experience for both the consumer and our brand partners. 
                                        </p>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/livecommerce.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                    DESIGN LAB
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        Design Lab as GoCommerce's content team is focused on the creative and marketing side of the organization which is vital for creating engaging product experiences for consumers to increase conversion across most categories for our brand partners.
                                        </p>
                                        <p className='services-image-desc'>
                                        The team is able to deliver engaging content for a variety of mediums, including web, social media, print, and more. We value strong communication skills and expertise in utilizing various content creation softwares, including keeping up-to-date with ecommerce trends to drive innovative and experimental multimedia strategies with the eventual end-goal of producing effective and compelling content.
                                        </p>
                                       
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           </>
    )
}

export default DesktopMarketingContent;