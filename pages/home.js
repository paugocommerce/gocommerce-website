import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/ITStartup/MainBanner";
import Features from "@/components/ITStartup/Features";
import OurFeatures from "@/components/ITStartup/OurFeatures";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";

import Footer from "@/components/_App/Footer";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Home = () => {
    return (
        <>
            
                <Navbar />
                <MainBanner />
                <Features />
                {/* <ServicesArea /> */}
                <OurFeatures />
                <Team />
                <FunFactsArea />
                {/* <RecentWorks />
                <PricingStyleOne />
                <Feedback />
                <Partner />
                <BlogPost /> */}
                <Footer />
         
            
        </>
    )
}

export default Home;