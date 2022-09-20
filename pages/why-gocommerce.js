import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";


const WhyGocommerce = () => {
    return (
        <>
            <Navbar />
            <div className="why-gocommerce-main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-5">
                                    <div className="hero-content">
                                        <img 
                                            src='/images/GoCommerce-Logov2.png' 
                                            className='ship-go-image'
                                            alt="GoCommerce-Logo" 
                                        />
                                        <span className='ship-go'>ShipGo</span>
                                        <p className='ship-go-desc'>The Trusted name in Order Fulfillment</p>
                                        
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
            <div className='ship-go-card'>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6 col-md-6 remove-padding">
                            <h3 className='ship-go-image-title'>Picked. Packed. Shipped.</h3>
                            <p className='ship-go-image-desc'>We have the best technology that integrates with the top eCommerce platforms.</p>
                            <div className="ship-go-single-ml-projects-box">
                                <img src="/images/ship-go-image.png" alt="image" />
                            </div>
                        </div>
                        <div className='ship-go-icon-text'>
                            <img 
                                src='/images/check-icon.png'
                                className='ship-go-icon' 
                                alt="branding" 
                            />
                        
                            <p className='ship-go-text'>Be More Efficient When You Maintain A Centralized Inventory To Serve All Marketplace Stores And Your Brand.Com</p>
                        </div>
                        <div className='ship-go-icon-text'>
                            <img 
                                src='/images/check-icon.png'
                                className='ship-go-icon' 
                                alt="branding" 
                            />
                        
                            <p className='ship-go-text'>Reduce Order Cancellations And Meet Customer Expectations With Reliable Fulfillment Specially On Campaign Surges.</p>
                        </div>
                        <div className='ship-go-icon-text'>
                            <img 
                                src='/images/check-icon.png'
                                className='ship-go-icon' 
                                alt="branding" 
                            />
                        
                            <p className='ship-go-text'>Have Peace Of Mind As We Safe Keep Your Inventory At Our State Of The Art Fulfillment Centers.</p>
                        </div>
                        
                    </div>
                    <hr className='ship-go-hr'/>
                    <h2 className='ship-go-second-title'>We have what it takes to help you in any part of your GoCommerce journey.</h2>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-1.png'
                            className='ship-go-icon-2' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Product Importation</span><br/>Connect your stores &amp; send us your Products.</p>
                    </div>
                    <div className='ship-go-arrow-down'>
                    <img 
                            src='/images/arrow-down.png'
                            className='' 
                             alt="branding" 
                        />
                    </div>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-2.png'
                            className='ship-go-icon-2' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Synced Store Channels</span><br/>Shopify, Lazada and Shopee system integration of orders.</p>
                    </div>
                    <div className='ship-go-arrow-down'>
                    <img 
                            src='/images/arrow-down.png'
                            className='' 
                             alt="branding" 
                        />
                    </div>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-3.png'
                            className='ship-go-icon-2' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Inventory Management</span><br/>
                        We safely store your Inventory.</p>
                    </div>
                    <div className='ship-go-arrow-down'>
                    <img 
                            src='/images/arrow-down.png'
                            className='' 
                             alt="branding" 
                        />
                    </div>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-4.png'
                            className='ship-go-icon-4' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Order Fulfillment</span><br/>
                        Your customer makes an order on your store.</p>
                    </div>
                    <div className='ship-go-arrow-down'>
                    <img 
                            src='/images/arrow-down.png'
                            className='' 
                             alt="branding" 
                        />
                    </div>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-5.png'
                            className='ship-go-icon-2' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Optimized Shipping</span><br/>
                        Don’t overpay for shipping. Get the best rates from our integrated logistics partners.
                        We also offer same-day delivery so that your customer’s excitement won't be cut off.</p>
                    </div>
                    <div className='ship-go-arrow-down'>
                    <img 
                            src='/images/arrow-down.png'
                            className='' 
                             alt="branding" 
                        />
                    </div>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-6.png'
                            className='ship-go-icon-6' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Return/Refunds Management</span><br/>
                        Online Operations can be tricky, various reasons why a customer would want to return a product. Let us handle that for you.</p>
                    </div>
                    <div className='ship-go-arrow-down'>
                    <img 
                            src='/images/arrow-down.png'
                            className='' 
                             alt="branding" 
                        />
                    </div>
                    <div className='ship-go-icon-text-2'>
                        <img 
                            src='/images/ship-go-icon-7.png'
                            className='ship-go-icon-2' 
                             alt="branding" 
                        />
                        <p className='ship-go-text-desc'><span className='ship-go-text-title'>Cash on Delivery Solutions</span><br/>
                        Offer Cash on Delivery as a payment option, get quick remittances.</p>
                    </div>
                </div>
            </div>
            <div className='ship-go-card-white'>
                <div className="container-fluid">
                <div className="section-title">
                    <h2 className='ship-go-white-title'>Our Logistics Partner</h2>
                    <p className='ship-go-white-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                </div>
                <div className="row justify-content-center logo-container">
                    <div className="col-lg-2 col-md-3 col-6 brand-logo">
                        <img src="/images/logistic-1.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 brand-logo">
                        <img src="/images/logistic-2.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 brand-logo">
                        <img src="/images/logistic-3.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6  brand-logo">
                        <img src="/images/logistic-4.png" alt="partner" />
                    </div>
                    
                </div>
                </div>
            </div>          
            <Footer />
        </>
    )
}

export default WhyGocommerce;