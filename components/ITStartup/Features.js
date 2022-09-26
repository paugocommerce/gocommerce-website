import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Features = () => {
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
							<p className='our-mission-desc text-center'>Leverage our technology and work with our team of experts to unlock </p>										
                        </div>
						<div class="text-center">
						<Link href="/contact">
							<a className=" grow-with-us text-center">GROW WITH US</a>
						</Link>
						</div>
						<hr></hr>
						<div className="section-title">
							<h2 className='our-mission text-center'>THE VELOCITY FLYWHEEL</h2>
							<img 
								src='/images/Velocity-Wheel.png' 
								className="velocity-image " 
								alt="man" 
							/>
						</div>
						<hr></hr>
						<h1 className='end-to-end'>End-to-End eCommerce Growth Partner</h1>
                        
						<div className="faq-accordion">
                        <Accordion allowZeroExpanded >
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
										Grow with Our Proven Framework
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
									Our Velocity Frameworks contain proven tools that our team of experts use to fast-scale revenue growth of brands.  We champion strategic planning and we enable brands to leverage on our vast cross-category experience in fast-scaling online businesses and building market champions
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
										Leverage Our Technology
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
									Leverage on our tech-enabled capabilities to unlock unprecedented levels of efficiency for your omnichannel.  Brands who work with us instantly get the advantage of lower inventory holding costs, reduced errors, higher conversion rates, and more efficient roll out of plans.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
										Advanced Performance Marketing
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
									Cutting edge marketing technology stack that provides an edge in performance marketing.  Our team of experts make use of social listening and other A.I. tools to help brands achieve their performance marketing objectives that translate to revenue growth.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
										Fulfill Orders Better than On Time, All the Time, At Scale
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
									Our network of strategically located modern fulfillment centers will enable your brand to automate order fulfillment and ensure customer delight.  We offer brands class-leading same day and next day delivery capability - a service that more and more consumers demand.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
										Total Customer Satisfaction Management
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
									Because we control the end-to-end processes involved in growing online businesses, we are able to develop a unique approach in Total Customer Satisfaction Management which has resulted in higher levels of positive customer reviews and repeat purchases.  We achieve this by doing the following:
									<br/>• Pre-sales Customer Engagement<br/>
									• After-sales Support<br/>
									• Product training<br/>
									• Seamless returns<br/>
									• Warranty Management
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            
                        </Accordion>
                    </div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
