import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const DesktopAdvantageBanner = () => {
    return (
        <>
        <div className="gocommercex-main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100  ">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <img 
                                            src='/images/GoCommerce-Logo-Banner.png' 
                                            className='ship-go-image'
                                            alt="GoCommerce-Logo" 
                                        />
                                        <span className='ship-go'>Advantage</span>
                                        <p className='ship-go-desc'>TOTAL END TO END SOLUTIONS</p>
                                    
                                        
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
                        <h2 className='services-page-main-gocom-x'><span>Why GoCommerce?</span></h2>
                        <p className='services-page-desc'>
                        We believe that the success of any business lies in the quality of service and customer experience it delivers. That is why we design and implement an efficient and cost-effective process that allows us to tailor-fit a system to your needs, helping you achieve the highest return on investment. Our team is dedicated to providing you with a foolproof logistics solution as well as innovative omni-channel marketing techniques that will elevate your business to greater heights. We're always ahead of the curve, implementing new technology and processes that offer excellence and consistency in every aspect.
                        </p>
                        
                    </div>
                    
                    
                </div>
            </div> 
            </>
        )
}

export default DesktopAdvantageBanner;