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

    const [_isMobile, setMobile] = useState();

    useEffect(() => {
        setMobile(isMobile);
    }, [setMobile]);
  
            return ( <> <Navbar hidden={!_isMobile} />
          <MainBanner hidden={!_isMobile} />
          <Features hidden={!_isMobile} />
          <OurFeatures hidden={!_isMobile} />
          <Team  hidden={!_isMobile} />
          <FunFactsArea hidden={!_isMobile} /> 
          <Footer hidden={!_isMobile} />
          <div hidden={_isMobile}> MobileView </div>
          </>
            )
        
       
      
      
    
        
       
        
            
        
   
}

export default Index;