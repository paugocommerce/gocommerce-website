import React, {useState} from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



const DesktopTeam = () => {
    const [content, setContent] = useState(" Our Velocity Frameworks contain proven tools that our team of experts use to fast-scale revenue growth of brands.  We champion strategic planning and we enable brands to leverage on our vast cross-category experience in fast-scaling online businesses and building market champions");
    const [title, setTitle] = useState("Grow with Our Proven Framework");
    const [active, setActive] = useState('item1');

    const onSetActiveItem = (item) => {
        if (item !== active){
          
          if (item === 'item1'){
            setActive('item1');
            setTitle("Grow with Our Proven Framework");
            setContent("Our Velocity Frameworks contain proven tools that our team of experts use to fast-scale revenue growth of brands.  We champion strategic planning and we enable brands to leverage on our vast cross-category experience in fast-scaling online businesses and building market champions.");
          }
          else if (item === 'item2'){
            setActive('item2');
            setTitle("Leverage Our Technology");
            setContent("Leverage on our tech-enabled capabilities to unlock unprecedented levels of efficiency for your omnichannel.  Brands who work with us instantly get the advantage of lower inventory holding costs, reduced errors, higher conversion rates, and more efficient roll out of plans.");
          }
          else if (item === 'item3'){
            setActive('item3');
            setTitle("Advanced Performance Marketing");
            setContent("Cutting edge marketing technology stack that provides an edge in performance marketing.  Our team of experts make use of social listening and other A.I. tools to help brands achieve their performance marketing objectives that translate to revenue growth.");
          }
          else if (item === 'item4'){
            setActive('item4');
            setTitle("Fulfill Orders Better than On Time, All the Time, At Scale");
            setContent("Our network of strategically located modern fulfillment centers will enable your brand to automate order fulfillment and ensure customer delight.  We offer brands class-leading same day and next day delivery capability - a service that more and more consumers demand.");
          }
          else if (item === 'item5'){
            setActive('item5');
            setTitle("Total Customer Satisfaction Management");
            setContent("Because we control the end-to-end processes involved in growing online businesses, we are able to develop a unique approach in Total Customer Satisfaction Management which has resulted in higher levels of positive customer reviews and repeat purchases.  We achieve this by doing the following: \n• Pre-sales Customer Engagement\n• After-sales Support\n• Product training\n• Seamless returns\n• Warranty Management");
          }
          else {
            setTitle("Grow with Our Proven Framework");
            setContent("Our Velocity Frameworks contain proven tools that our team of experts use to fast-scale revenue growth of brands.  We champion strategic planning and we enable brands to leverage on our vast cross-category experience in fast-scaling online businesses and building market champions.");
            }
        }
        else {
          setActive(item); // handle click on currently active item
        }
      };
        
  
     

    return (
       <div className="team-area ptb-80 ">
            <div className="container">
            <div className="row">
                <div className="section-title">
                    <h1 className='gocom-recognition'><span>Work with the Best</span></h1>
                    
                    <p className='gocom-recognition-desc'>GoCommerce has received the highest recognition from top eCommerce platforms that shows our quantifiable reliability in driving the metrics that serve as strong foundations from revenue growth.
</p>
                </div>
            
          
                <div className="row justify-content-center logo-container">
                    <div className="col-lg-6 col-md-6 col-12 brand-logo  text-center">
                    <img 
                        src='/images/Desktop-Lazada-Award.png'
                        className='lazada-award' 
                        alt="lazada-award" 
                                    />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 brand-logo  text-center">
                    <img 
                        src='/images/Desktop-Shopee-Award.png'
                        className='lazada-award' 
                        alt="Shopee-award" 
                    />
                    </div>
                </div>
            </div>
                </div>
    
                
         

            <div className="container">
				<div className="row">
                    <div className='sec-end-to-end'>
						<h1 className='end-to-end'>End-to-End eCommerce Growth Partner</h1>
                        
						<div className="faq-accordion">
                            <div className="row">
                                <div className='col-lg-6'>
                                        <h3 className='accordion-title'>{title}</h3>
                                        <p className='accordion-content'>
                                        {content}
                                        </p>

                                </div>
                                <div className='col-lg-6'>
                                    <label className={`accordion-btn-title  ${active === 'item1' ? "active" : ""}`} onClick={() => onSetActiveItem('item1')}>Grow with Our Proven Framework</label>
                                    <label className={`accordion-btn-title ${active === 'item2' ? "active" : ""}`} onClick={() => onSetActiveItem('item2')}>Leverage Our Technology</label>
                                    <label className={`accordion-btn-title ${active === 'item3' ? "active" : ""}`} onClick={() => onSetActiveItem('item3')}>Advanced Performance Marketing</label>
                                    <label className={`accordion-btn-title ${active === 'item4' ? "active" : ""}`} onClick={() => onSetActiveItem('item4')}>Fulfill Orders Better than On Time, All the Time, At Scale</label>
                                    <label className={`accordion-btn-title ${active === 'item5' ? "active" : ""}`} onClick={() => onSetActiveItem('item5')}>Total Customer Satisfaction Management</label>
                                    
                                </div>
                            </div>
                       
                        </div>
                    </div>
                    </div>
                    </div>
        </div>

    )
}

export default DesktopTeam;