import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2 className='gocom-framework'>We drive Results,</h2>
                    <h2 className='gocom-framework'>Not just Potential</h2>
                    
                    <p className='gocom-framework-desc'>Our proven frameworks have helped<br/> brands become market<br/> leaders online.</p>
                </div>

                <div className="row justify-content-center logo-container">
                    <div className="col-lg-2 col-md-3 col-6 ">
                        <img src="/images/logo-lazada.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 ">
                        <img src="/images/logo-facebook.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-shopee.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-instagram.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-shopify.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-google.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-zalora.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-tiktok.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-oracle.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 framework-logo">
                        <img src="/images/logo-2go.png" alt="partner" />
                    </div>
                    
                    
                   
                </div>

                

                {/* <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div> */}
            </div>
        </div>
    )
}

export default FunFactsArea;