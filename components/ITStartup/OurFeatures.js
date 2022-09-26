import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import dynamic from 'next/dynamic';
const OwlCarousel2 = dynamic(import('react-owl-carousel3'));
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const options2 = {
    items: 5,
    loop: false,
    nav: true,
    dots: false,
    margin: 15,
    autoplay: false,
    navText : ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    smartSpeed: 1000,
    
   
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


const OurFeatures = () => {
    const [display2, setDisplay2] = React.useState(false);

    React.useEffect(() => {
        setDisplay2(true);
    }, [])
    return (
        isMobile? <div className="features-area pt-80 pb-50 ">
            <div className="container">
                <div className="section-title">
                    <h2 className='gocom-brands'>We’re grateful to work with these incredible brands.</h2>
                </div>
                {display2 ? <OwlCarousel2 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options2}
            > 
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
                <div className="row justify-content-center logo-container">
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-omega.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-arla.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-paper.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-beaba.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-carl.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-global-pacific.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-manduka.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4  brand-logo">
                        <img src="/images/logo-toyworld.png" alt="partner" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 brand-logo">
                        <img src="/images/logo-toesox.png" alt="partner" />
                    </div>
                </div>
                </OwlCarousel2> : ''}
               
            </div>
        </div>: <div></div>
    )
}

export default OurFeatures;  