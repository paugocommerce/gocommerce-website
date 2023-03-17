import React, { useState } from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Modal from '../Common/Modal';



const Features = () => {
    let subtitle;

    const [showModal, setShowModal] = useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
        
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }
    return (
       <div className="boxes-area">
         
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						{/* <div className="single-box">
							<img 
								src='/images/investment-removebg.png' 
								className="animate__animated  animate__bounceInDown animate__delay-0.1s " 
								alt="man" 
							/>
						</div> */}
					</div>
					<div className="col-lg-6 col-md-12 services-content">
                        <div className="section-title">
                            <h2 className='our-mission text-center'>OUR MISSION</h2>
                            <h1 className='our-mission-below text-center'>Creating the <span>Easiest</span> and <span>Most Pleasurable Online</span> Shopping Experiences</h1>
							<p className='our-mission-desc text-center'>Go Commerce creates the easiest and most pleasurable online shopping experience for your customers, helping you achieve your brand's peak sales and marketing performance.</p>

                            <p className='our-mission-desc text-center'>From creating custom e-commerce websites to providing efficient solutions for managing an entire customer journey, GoCommerce has been helping marketing experts succeed. With our aid, you can focus on what you do best—growing your business </p>										
                        </div>
						<div className="text-center">
						<Link href="/contact">
							<a className=" grow-with-us text-center">GROW WITH US</a>
						</Link>
						</div>
						<hr></hr>
						<div className="section-title">
							<h2 className='our-mission text-center'>THE VELOCITY FLYWHEEL</h2>
							{/* <img 
								src='/images/Velocity-Wheel.png' 
								className="velocity-image " 
								alt="man" 
							/> */}
                            <div className="container">
                                <div className="ecomMarketing" ><img src='/images/eComMarketingv2.png' className='ecomMarketingImg' onClick={() => setShowModal(true)} />
                              </div>
                                <div className="customerSupport" ><img src='/images/CustomerSupportv2.png' className='customerSupportImg' /></div>
                                <div className="orderFulfillment" ><img src='/images/orderFulfillmentv2.png' className='orderFulfillmentImg' /></div>
                                <div className="eCommerceStrategy" ><img src='/images/eCommerceStrategyv2.png' className='eCommerceStrategyImg' onClick={() => setShowModal(true)} /></div>
                              
                            </div>
                         
						</div>
						
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
