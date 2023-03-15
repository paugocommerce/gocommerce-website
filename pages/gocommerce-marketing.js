import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })
const MobileContentMarketingContent = dynamic(() => mobile() ? import('@/components/ITStartup/MarketingContent'): import('@/components/ITStartup/DesktopMarketingContent'), { ssr: false })


const Marketing = () => {
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
            <MobileContentMarketingContent />    
            <MobileContentFooter />
        </>
    )
}

export default Marketing;