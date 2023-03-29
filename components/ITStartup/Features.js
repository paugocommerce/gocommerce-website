import React, { useState } from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Modal from 'react-modal';



const Features = () => {
	const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    Modal.setAppElement('#root');


    let subtitle;

    const customStyles = {
        
        overlay: {zIndex: 99999, padding: '0px 15px', backgroundColor: 'rgba(0, 0, 0, 0.75)'},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-40%',
			transform: 'translate(-50%, -50%)',
			
		  }
	    
      };

    const [showModal, setShowModal] = useState(false);

    const [displayText1, setDisplayTest1] = useState('');

    const handleClick = () => {
        setDisplayTest1('Hello World');
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (modalitem) => {
    setModalIsOpen(true);
    if (modalitem == 'modalitem1') {
		setModalTitle('Order Fulfillment');
		setModalContent('Well-packed. Better than on-time orders. All the time. At Scale');
	}
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
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
						<Link href="/contact-us">
							<a className=" grow-with-us text-center">GROW WITH US</a>
						</Link>
						</div>
						<hr></hr>
						<div className="section-title">
							<h2 className='our-mission text-center'>THE VELOCITY FLYWHEEL</h2>
							
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}  style={customStyles}>
	  <button className='modal-x-button'  onClick={closeModal}><Icon.XSquare /></button>
        <h2>{modalTitle}</h2>
        <p>{modalContent}</p>
       
      </Modal>
							{/* <img 
								src='/images/Velocity-Wheel.png' 
								className="velocity-image " 
								alt="man" 
							/> */}
                            <div className="container">
                                <div className="ecomMarketing" ><img src='/images/eComMarketingv2.png' className='ecomMarketingImg'  />
                              </div>
                                <div className="customerSupport" ><img src='/images/CustomerSupportv2.png' className='customerSupportImg' /></div>
                                <div className="orderFulfillment" ><img src='/images/orderFulfillmentv2.png' className='orderFulfillmentImg'  onClick={() => openModal('modalitem1')} /></div>
                                <div className="eCommerceStrategy" ><img src='/images/eCommerceStrategyv2.png' className='eCommerceStrategyImg'/></div>
                              
                            </div>
                         
						</div>
						
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
