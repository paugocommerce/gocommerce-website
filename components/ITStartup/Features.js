import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="boxes-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<img 
								src='/images/investment-removebg.png' 
								className="animate__animated  animate__bounceInDown animate__delay-0.1s " 
								alt="man" 
							/>
						</div>
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
                        <div className='end-to-end-list'>
						<p className='verticalLine'>Grow with Our Proven Framework</p>
						<p className='verticalLine'>Leverage Our Technology</p>
						<p className='verticalLine'>Advanced Performance Marketing</p>
						<p className='verticalLine'>Fulfill Orders Better than On Time, All the Time, At Scale</p>
						<p className='verticalLine'>Total Customer Satisfaction Management</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
