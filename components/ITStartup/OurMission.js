import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const OurMission = () => {
    return (
        isMobile? <div className="boxes-area aimbig">
			<div className="container">
				<div className="row">
					
					<div className="col-lg-6 col-md-12 services-content">
                        <div className="section-title">
                            <h2 className='gocom-values text-center'>GoCommerce Values</h2>
                            <h1 className='gocom-values-below text-center'><span>A</span>IMBIG</h1>
                            <h1 className='gocom-values-accountabilities text-center'>Accountability</h1>
							<p className='gocom-values-desc text-center'>We drive results. We say what we<br/> mean and we mean what we say.</p>										
                        </div>
						<div class="text-center">
						<Link href="/contact">
							<a className="join-with-us text-center">JOIN OUR TEAM</a>
						</Link>
						</div>
						
					</div>
				</div>
			</div>
		</div>: <div></div>
    )
}

export default OurMission;
