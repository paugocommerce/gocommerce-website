import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const options = {
    items: 5,
    loop: false,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: false,
    smartSpeed: 1000,
    stagePadding: 40,
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

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        isMobile? <div className="team-area ptb-80 ">
            <div className="container">
               
                <div className="section-title">
                    <h1 className='gocom-recognition'><span>Work with the Best</span></h1>
                    
                    <p className='gocom-recognition-desc'>GoCommerce has received the highest recognition from top eCommerce platforms that shows our quantifiable reliability in driving the metrics that serve as strong foundations from revenue growth.
</p>
                </div>
            </div>
          

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                <div className="single-team">
                    <img 
                        src='/images/mobile-lazada-award.png'
                        className='lazada-award' 
                        alt="lazada-award" 
                                    />
                </div>
            
                <div className="single-team">
                    <img 
                        src='/images/lazada-award-2.png'
                        className='lazada-award' 
                        alt="lazada-award" 
                    />
                </div>
    
                
            </OwlCarousel> : ''}

            <div className="container">
				<div className="row">
                    <div className='sec-end-to-end'>
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
        </div>: <div></div>

    )
}

export default Team;