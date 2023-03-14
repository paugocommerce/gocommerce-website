import React, { useState } from "react"
import Link from '@/utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const DesktopNavbar = () => {
    const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = React.useState(true)
    const [imgSrc, setImgSrc] = useState('/images/GoCommerce-Web-Logo.png');
    const [linkColor, setlinkColor] = useState('');
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }
    
    React.useEffect(() => {
        let elementId = document.getElementById("header");
        let elementClass = document.getElementsByClassName(".nav-link");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                setImgSrc('/images/GoCommerce-Logo.png');
                setlinkColor('gocom-color-link'); 
               
            } else {
                elementId.classList.remove("is-sticky");
                setImgSrc('/images/GoCommerce-Web-Logo.png'); 
                setlinkColor('');
            }
        });
    })

 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" class="top-nav headroom">
          
                <div className="container  remove-padding">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src={imgSrc} height="35" alt="logo" />
                            </a>
                        </Link>

                    

                       
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/about-us">
                                        <a  className={`nav-link ${linkColor}`}>
                                            About Us 
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/services" >
                                        <a  className={`nav-link ${linkColor}`}>
                                            Services 
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/gocommerce-advantage" >
                                        <a  className={`nav-link ${linkColor}`}>
                                            GoCommerce Advantage
                                        </a>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link href="/contact-us" >
                                        <a  className={`nav-link ${linkColor}`}>
                                            Become a Partner 
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                           
                        

                        
                              
                    </nav>
                </div>
           
        </header>
      
   
    );
}

export default DesktopNavbar;