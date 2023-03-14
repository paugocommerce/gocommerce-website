import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })
const MobileContentOmniChannel = dynamic(() => mobile() ? import('@/components/ITStartup/OmniChannel'): import('@/components/ITStartup/DesktopOmniChannel'), { ssr: false })
const MobileContentAdvantageBanner = dynamic(() => mobile() ? import('@/components/ITStartup/AdvantageBanner'): import('@/components/ITStartup/DesktopAdvantageBanner'), { ssr: false })
const MobileContentAdvantageContent = dynamic(() => mobile() ? import('@/components/ITStartup/AdvantageContent'): import('@/components/ITStartup/DesktopAdvantageContent'), { ssr: false })

const WhyGocommerce = () => {
    return (
        <>
            <MobileContentNavbar />
            <MobileContentAdvantageBanner />
            <MobileContentOmniChannel /> 
            <MobileContentAdvantageContent />
            <MobileContentFooter />
        </>
    )
}

export default WhyGocommerce;