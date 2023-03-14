import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import dynamic from 'next/dynamic';


const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentServices = dynamic(() => mobile() ? import('@/components/ITStartup/Services') : import('@/components/ITStartup/DesktopServices'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })


 
const Services1 = () => {
   
    return (
        <>
            <MobileContentNavbar />
            <MobileContentServices />
            <MobileContentFooter />
        </>
    )
}

export default Services1;