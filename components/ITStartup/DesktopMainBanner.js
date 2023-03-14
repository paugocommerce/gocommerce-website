import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const DesktopMainBanner = () => {
  



    return (
       
		<div className="main-banner">
            
          
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5 mainbanner-slideshow">
                           
								<div className="hero-content">
                                
                                
									<h1><span>Fast-scaling</span></h1>
                                    <h1 className='omnichannel'><span>Omnichannel eCommerce</span></h1>
									<p>GoCommerce is an eCommerce strategy and management company that helps brands accelerate the growth of their eCommerce business.

</p>
									
									<Link href="/contact">
										<a className=" float-start get-started">LEARN MORE</a>
									</Link>
								</div>
							</div>

						
						</div>
					</div>
				</div>
			</div>

       
		</div>
    )
}

export default DesktopMainBanner