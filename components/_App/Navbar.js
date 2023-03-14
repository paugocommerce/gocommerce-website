import React from "react"
import Link from '@/utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }
    if(isMobile) {
    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
}
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        isMobile ?
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container  remove-padding">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src="/images/GoCommerce-Logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <Link href="/">
                                <a  className="navbar-brand2">
                                    <img src="/images/GoCommerce-Logov2.png" alt="logo" />
                                </a>
                            </Link>
                            <button 
                            onClick={toggleNavbar} 
                            className="navbar-toggler navbar-toggler-right toggler-x-icon"
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar icon-bar2 top-bar"></span>
                            <span className="icon-bar icon-bar2 middle-bar"></span>
                            <span className="icon-bar icon-bar2 bottom-bar"></span>
                        </button>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/about-us">
                                        <a  className="nav-link">
                                            About Us 
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/services" >
                                        <a  className="nav-link">
                                            Services 
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/gocommerce-advantage" >
                                        <a  className="nav-link">
                                            GoCommerce Advantage
                                        </a>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link href="/contact-us" >
                                        <a  className="nav-link">
                                            Become a Partner 
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <hr className="navbar-hr" />
                            <div className="single-footer-widget">
                           
                            
                           
                            <ul className="social-links">
                                <li> 
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                    <img 
                                        src='/images/icon-facebook.png' 
                                        className="social-icon" 
                                        alt="man" 
                                    />
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" className="twitter" target="_blank">
                                    <img 
                                        src='/images/icon-linkedin.png' 
                                        className="social-icon" 
                                        alt="man" 
                                    />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagramcom/" className="instagram" target="_blank">
                                    <img 
                                        src='/images/icon-instagram.png' 
                                        className="social-icon" 
                                        alt="man" 
                                    />
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        </div>       
                    </nav>
                </div>
            </div>
        </header> : <div></div>
    );
}

export default Navbar;