import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopNavbar'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopFooter'), { ssr: false })
const MobileContentContactForm = dynamic(() => mobile() ? import('@/components/Contact/ContactForm'): import('@/components/Contact/DesktopContactForm'), { ssr: false })
const MobileContentContactBanner = dynamic(() => mobile() ? import('@/components/ITStartup/ContactUsBanner'): import('@/components/ITStartup/DesktopContactUsBanner'), { ssr: false })

const Contact = () => {
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
            <MobileContentContactBanner />
            <MobileContentContactForm />
            <MobileContentFooter />
        </>
    )
}

export default Contact;