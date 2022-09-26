import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel4 = dynamic(import('react-owl-carousel3'));

const options4 = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
   
    
   
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

const MainBanner = () => {
    const [display4, setDisplay4] = React.useState(false);

    React.useEffect(() => {
        setDisplay4(true);
    }, [])



    return (
        
		<div className="main-banner">
            {display4 ? <OwlCarousel4 
                className="agency-portfolio-home-slides owl-carousel owl-theme"
                {...options4}
            > 
                 <img 
                                        src='/images/main-banner-bg.png' 
                                        className="" 
                                        alt="man" 
                                    />
                                    <img 
                                        src='/images/banner-slideshow-1.png' 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="man" 
                                    />
                                    <img 
                                        src='/images/banner-slideshow-2.png' 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="man" 
                                    />
                                    <img 
                                        src='/images/banner-slideshow-3.png' 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="man" 
                                    />
                                    <img 
                                        src='/images/banner-slideshow-4.png' 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="man" 
                                    />
            </OwlCarousel4> : ''}
          
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5 mainbanner-slideshow">
                           
								<div className="hero-content">
                                
                                
									<h1><span>Fast-scaling</span></h1>
                                    <h1 className='omnichannel'><span>Omnichannel eCommerce</span></h1>
									<p>GoCommerce is an eCommerce strategy and management company that helps brands accelerate the growth of their eCommerce business.</p>
									
									<Link href="/contact">
										<a className=" float-start get-started">GROW WITH US</a>
									</Link>
								</div>
							</div>

							{/* <div className="col-lg-6 offset-lg-1">
								<div className="banner-image">
                                    <img 
                                        src='/images/banner-image/man.png' 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="man" 
                                    />
                        
                                    <img 
                                        src="/images/banner-image/code.png" 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="code"
                                    />
                                
                                    <img 
                                        src="/images/banner-image/carpet.png" 
                                        className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                        alt="carpet"
                                    />
                            
                                    <img 
                                        src="/images/banner-image/bin.png" 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="bin"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/book.png" 
                                        className="animate__animated animate__bounceIn animate__delay-0.1s" 
                                        alt="book"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/dekstop.png" 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="dekstop"
                                    />
                    
                                    <img 
                                        src="/images/banner-image/dot.png" 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="dot"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/flower-top-big.png" 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="flower-top-big"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/flower-top.png" 
                                        className="animate__animated animate__rotateIn animate__delay-0.1s" 
                                        alt="flower-top"
                                    />
                    
                                    <img 
                                        src="/images/banner-image/keyboard.png" 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="keyboard"
                                    />
                            
                                    <img 
                                        src="/images/banner-image/pen.png" 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="pen"
                                    />
                                
                                    <img 
                                        src="/images/banner-image/table.png" 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="table"
                                    />
                    
                                    <img 
                                        src="/images/banner-image/tea-cup.png" 
                                        className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                        alt="tea-cup"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/headphone.png" 
                                        className="animate__animated animate__rollIn animate__delay-0.1" 
                                        alt="headphone"
                                    />
                            
                                    <img 
                                        src="/images/banner-image/main-pic.png" 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1" 
                                        alt="main-pic"
                                    />
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			{/* <div className="shape1">
				<img src="/images/shape1.png" alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
			<div className="shape3">
				<img src="/images/shape3.svg" alt="shape"/>
			</div>
			<div className="shape4">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape5">
				<img src="/images/shape5.png" alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape7">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div> */}
		</div>
    )
}

export default MainBanner