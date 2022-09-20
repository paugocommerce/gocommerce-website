import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurFeatures = () => {
    return (
        <div className="features-area pt-80 pb-50 ">
            <div className="container">
                <div className="section-title">
                    <h2 className='gocom-brands'>We’re grateful to work with these incredible brands.</h2>
                </div>
                <div className="row justify-content-center logo-container">
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-garmin.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-nutriasia.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-anker.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-nifty.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-nanoleaf.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-eufy.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-lav.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-soundcore.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-kk.png" alt="partner" />
                    </div>
                </div>
                  
               
            </div>
        </div>
    )
}

export default OurFeatures;  