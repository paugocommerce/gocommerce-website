import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
// import PageBanner from '@/components/Common/PageBanner'; 
// import ContactInfo from '@/components/Contact/ContactInfo';
// import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
            <Navbar />

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

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;