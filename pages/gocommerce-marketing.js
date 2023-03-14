import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })
const MobileContentMarketingContent = dynamic(() => mobile() ? import('@/components/ITStartup/MarketingContent'): import('@/components/ITStartup/DesktopMarketingContent'), { ssr: false })


const Marketing = () => {
    return (
        <>
            <MobileContentNavbar />
            <MobileContentMarketingContent />    
            <MobileContentFooter />
        </>
    )
}

export default Marketing;