import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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
                        src='/images/lazada-award.png'
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
        </div>: <div></div>
    )
}

export default Team;