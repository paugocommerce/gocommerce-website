import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/ITStartup/MainBanner";
import Features from "@/components/ITStartup/Features";
import OurFeatures from "@/components/ITStartup/OurFeatures";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";

import Footer from "@/components/_App/Footer";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Index = () => {
    renderContent = () => {
        if (isMobile) {
            return ( <> <Navbar />
          <MainBanner />
          <Features />
          <OurFeatures />
          <Team />
          <FunFactsArea /> 
          <Footer />
          </>
            )
        }
        return ( <> <div> </div> </> )
      }
    
      
        return this.renderContent();
      
    
        
       
        
            
        
   
}

export default Index;