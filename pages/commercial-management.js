import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })
const MobileContentCommercialContent = dynamic(() => mobile() ? import('@/components/ITStartup/CommercialContent'): import('@/components/ITStartup/DesktopCommercialContent'), { ssr: false })


const Commercial = () => {
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
            <MobileContentCommercialContent />  
            <MobileContentFooter />
        </>
    )
}

export default Commercial;