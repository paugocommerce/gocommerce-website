import React from 'react';
import dynamic from 'next/dynamic';
const mobile = require('is-mobile');
const MobileContentNavbar = dynamic(() => mobile() ? import('@/components/_App/Navbar') : import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentFooter = dynamic(() => mobile() ? import('@/components/_App/Footer'): import('@/components/_App/DesktopBlank'), { ssr: false })
const MobileContentContactForm = dynamic(() => mobile() ? import('@/components/Contact/ContactForm'): import('@/components/_App/DesktopBlank'), { ssr: false })

const Contact = () => {
    return (
        <>
            <MobileContentNavbar />

            {/* <PageBanner pageTitle="Contact Us" /> */}
            <div className="contact-page pt-80 pb-50 ">
                <div className="container">
                    <div className="section-title">
                        
                        <h2 className='contact-page-title'>Contact Us</h2>
                        <p className='contact-page-desc'>
                        We know everyone's needs and opportunities are unique so we've built this form to help make sure we're putting you in contact with the right team.</p>
                        <hr className='contact-page-hr'/>
                    </div>
                </div>
            </div>


            {/* <ContactInfo />

            <GoogleMap /> */}

            <MobileContentContactForm />
           
            <MobileContentFooter />
        </>
    )
}

export default Contact;