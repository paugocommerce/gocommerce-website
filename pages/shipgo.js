import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })
const MobileContentShipGoContent = dynamic(() => mobile() ? import('@/components/ITStartup/ShipGoContent'): import('@/components/ITStartup/DesktopShipGoContent'), { ssr: false })


const WhyGocommerce = () => {
    return (
        <>
            <MobileContentNavbar />
            <MobileContentShipGoContent />   
            <MobileContentFooter />
        </>
    )
}

export default WhyGocommerce;