import React, { useState } from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Modal from 'react-modal';




const DesktopFeatures = () => {
   
    return (
       <div className="boxes-area">
         
			<div className="container">
				<div className="row">
					
					<div className="col-lg-12 col-md-12 services-content">
                        
                        <div className="section-title">
                           
                                <h2 className='our-mission text-center'>OUR MISSION</h2>
                               
                            
                            <div className='col-lg-8 offset-lg-2'>
                                <h1 className='our-mission-below text-center'>Creating the <span>Easiest</span> and <span>Most Pleasurable Online</span> Shopping Experiences</h1>
                            </div>
							<p className='our-mission-desc text-center'>Go Commerce creates the easiest and most pleasurable online shopping experience for your customers, helping you achieve your brand's peak sales and marketing performance.</p>

                            <p className='our-mission-desc text-center'>From creating custom e-commerce websites to providing efficient solutions for managing an entire customer journey, GoCommerce has been helping marketing experts succeed. With our aid, you can focus on what you do best—growing your business</p>										
                        </div>
						<div className="text-center">
						<Link href="/contact-us">
							<a className=" grow-with-us text-center">ABOUT US</a>
						</Link>
						</div>
						<hr></hr>
						<div className="section-title">
							<h2 className='our-mission text-center'>THE VELOCITY FLYWHEEL</h2>
							
                            <div className="container">
                                
                                <div className="col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-lg-2 velocity-mt ">
                                        <div className='velocity-label-container'>
                                            <h2 className='velocity-label-title'>eCommerce Strategy &amp; Management</h2>
                                            <span className='velocity-label-desc'>On-point strategy, technology and execution</span>
                                        </div>
                                        <div className='velocity-label-container-bottom'>
                                            <h2 className='velocity-label-title'>Order Fulfillment</h2>
                                            <span className='velocity-label-desc'>Well-packed. Better than on-time orders. All the time. At Scale</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 text-center">
                                            <img 
                                        src='/images/Desktop-Velocity-Wheel.png' 
                                        className="img-fluid velocity-image"
                                        alt="Velocity-Wheel" 
                                    /> 
                                    </div>
                                    <div className="col-lg-2 velocity-mt velocity-ml">
                                        <div className='velocity-label-container'>
                                            <h2 className='velocity-label-title'>Total Customer Support Management</h2>
                                            <span className='velocity-label-desc'>Pre-sales, after-sales warranty and  return management</span>
                                        </div>
                                        <div className='velocity-label-container-bottom'>
                                            <h2 className='velocity-label-title'>eCommerce Marketing</h2>
                                            <span className='velocity-label-desc'>Marketplace and Social Performance Marketing</span>
                                        </div>
                                    </div>

                                </div>
                                </div>

                               
                              
                            </div>
                           
						</div>
					
					</div>
				</div>
			</div>
		</div>
    )
}

export default DesktopFeatures;
