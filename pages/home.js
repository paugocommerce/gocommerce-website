import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/ITStartup/MainBanner";
import Features from "@/components/ITStartup/Features";
import OurFeatures from "@/components/ITStartup/OurFeatures";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";

import Footer from "@/components/_App/Footer";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import dynamic from 'next/dynamic'
import { useUserAgent } from 'next-useragent'
const mobile = require('is-mobile');


const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentMainBanner = dynamic(() => mobile() ? import('@/components/ITStartup/MainBanner'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentFeatures = dynamic(() => mobile() ? import('@/components/ITStartup/Features'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentOurFeatures = dynamic(() => mobile() ? import('@/components/ITStartup/OurFeatures'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentTeam = dynamic(() => mobile() ? import('@/components/Common/Team'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentFunFactsArea = dynamic(() => mobile() ? import('@/components/Common/FunFactsArea'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopBlank'), { ssr: false })




const Home = () => {
    return (
        <>
           
                <MobileContentNavbar />
                <MobileContentMainBanner />
                <MobileContentFeatures />
                <MobileContentOurFeatures />
                <MobileContentTeam />
                <MobileContentFunFactsArea />
                <MobileContentFooter />
         
            
        </>
    )
}

export default Home;