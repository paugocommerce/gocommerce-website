import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

const mobile = require('is-mobile');

const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentAboutUs = dynamic(() => mobile() ? import('@/components/ITStartup/AboutUs'): import('@/components/ITStartup/DesktopAboutUs'), { ssr: false })
const MobileContentOmniChannel = dynamic(() => mobile() ? import('@/components/ITStartup/OmniChannel'): import('@/components/ITStartup/DesktopOmniChannel'), { ssr: false })
const MobileContentOurMission = dynamic(() => mobile() ? import('@/components/ITStartup/OurMission'): import('@/components/ITStartup/DesktopOurMission'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })


const About1 = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const loader = document.getElementById('globalLoader');
          if (loader)
            loader.remove();
        }
      }, []);
    return (
        <>
            <MobileContentNavbar />
            <MobileContentAboutUs />
            <MobileContentOmniChannel />
            <MobileContentOurMission />
            <MobileContentFooter />
        </>
    )
}

export default About1;