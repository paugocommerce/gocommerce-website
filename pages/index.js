import React from 'react';
import dynamic from 'next/dynamic';


const mobile = require('is-mobile');

const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentMainBanner = dynamic(() => mobile() ? import('@/components/ITStartup/MainBanner'): import('@/components/ITStartup/DesktopMainBanner'), { ssr: false })
const MobileContentFeatures = dynamic(() => mobile() ? import('@/components/ITStartup/Features'): import('@/components/ITStartup/DesktopFeatures'), { ssr: false })
const MobileContentOurFeatures = dynamic(() => mobile() ? import('@/components/ITStartup/OurFeatures'): import('@/components/ITStartup/DesktopOurFeatures'), { ssr: false })
const MobileContentTeam = dynamic(() => mobile() ? import('@/components/Common/Team'): import('@/components/Common/DesktopTeam'), { ssr: false })
const MobileContentFunFactsArea = dynamic(() => mobile() ? import('@/components/Common/FunFactsArea'): import('@/components/Common/DesktopFunFactsArea'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })




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