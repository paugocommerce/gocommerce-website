import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import dynamic from 'next/dynamic';



const Services = () => {

    return (

        <div className="services-page pt-80 pb-50 ">
                <div className="container">
                    <div className="section-title">
                        <h2 className='services-page-main'><span>Our Services</span></h2>
                        <h2 className='services-page-title'>Enterprise Services</h2>
                        <p className='services-page-desc'>
                            We make use of tech-enabled omnichannel operations through automation capabilities and integration of key tasks and processes.  This makes us hyper-focused on continuously enhancing our tech-enabled capabilities in product catalog management, inventory planning, content management, performance marketing and the seamless co-existence of all of these capabilities to provide world-class services to our brand partners. 
                        </p>
                        <p className='services-page-desc'>
                        Brands who work with us instantly get the advantage of lower inventory holding costs, reduced errors, higher conversion rates, and more efficient roll out of plans.
                        </p>
                        <p className='services-page-desc'>
                        Furthermore, we pride ourselves on having built modern and rapidly scalable omnichannel fulfillment centers that ensure that the order fulfillment capacity will never be the bottleneck of brands as they scale.
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
                                     <Link href="/commercial-management">COMMERCIAL MANAGEMENT</Link>
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        The success of commercial management lies in understanding the market and the needs of brand partners. We, at GoCommerce aim to achieve this through a comprehensive suite of services and integration with other platforms and technologies, where everything from strategy, operations, and customer-retention are continuously worked on and improved. 
                                        </p>
                                        <p className='services-image-desc'>
                                        Our experience and expertise enables adaptability to ever-changing market conditions and keeping brand partners competitive. 
                                        </p>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/services-image-2.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     <Link href="/gocommerce-marketing">ECOMMERCE MARKETING</Link>
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        GoCommerce Marketing works closely with brands to deliver quality output across all channels, from conceptualization to analysis, using expertise and technology to continuously improve and discover new ways to deliver digital marketing collateral. Their aim is to build an effective system that provides valuable insights and ever-evolving practices to ultimately scale up businesses.
                                        </p>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                                    <div className="single-ml-projects-box">
                                        <img src="/images/services-images-3.png" alt="image" />
                                    
                                    </div>
                                     <h3 className='services-image-title'>
                                     <Link href="/shipgo">SHIPGO ORDER FULFILLMENT</Link>
                                            
                                        </h3>
                                        <p className='services-image-desc'>
                                        Many brands outsource their order fulfillment to enable them to scale.  ShipGo is an omnichannel fulfillment which provides our brand partners with a clear edge vs “Fulfillment by Lazada/Shopee” which only fulfills orders of their respective platforms.  ShipGo fulfills orders for all Channels from a single pool of inventory which automatically syncs together for a more seamless fulfillment process.
                                        </p>
                                        <p className='services-image-desc'>
                                        Modern Fulfillment Facilities we call as GoHubs enable brands of Same-day Delivery options in Metro Manila and soon in Metro Cebu.
                                        </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         )
        }
        
        export default Services;