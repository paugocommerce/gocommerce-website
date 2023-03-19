import React, {useState} from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const OurMission = () => {
	const [content, setContent] = useState("We say what we mean and we mean what we say. We hold ourselves accountable for every decision we make. Our top priority is always to drive results and improve every aspect of the services we provide.");
    const [title, setTitle] = useState("Accountability");
    const [active, setActive] = useState('item1');

	const onSetActiveItem = (item) => {
        if (item !== active){
          setActive(item);
          if (item === 'item1'){
            setTitle("Accountability");
            setContent("We say what we mean and we mean what we say. We hold ourselves accountable for every decision we make. Our top priority is always to drive results and improve every aspect of the services we provide.");
          }
          else if (item === 'item2'){
			setTitle("Integrity");
            setContent(" We do what's right—always. We are committed to providing our partners and clients with a healthy, safe environment they can trust while upholding our values as a company.");
          }
          else if (item === 'item3'){
			setTitle("Making a Mark");
            setContent(" We strive to go beyond what is expected. We aim to produce quality results and explore different approaches and solutions each day to get outstanding outcome. We do not settle for anything less.");
          }
          else if (item === 'item4'){
			setTitle("Bold");
            setContent("With our pioneer mindset, we are undaunted to do things no one has done before. We take calculated risks and we never back down from any challenge. With our team of dedicated and strong-minded individuals, we make it a point to always think outside the box.");
          }
          else if (item === 'item5'){
			setTitle("Innovative");
            setContent("We use technology and creativity to find ways to do things better each time. For each and every day we work with our team, we think of diverse ways to create more creative solutions to improve our services. ");
          }
		  else if (item === 'item6'){
			setTitle("Great Customer Service");
            setContent("Excellent service is our passion; providing great customer experience is our mission. We aim for every transaction and every customer experience to be even more memorable and better than the last.");
          }
          else {
			setTitle("Accountability");
            setContent("We say what we mean and we mean what we say. We hold ourselves accountable for every decision we make. Our top priority is always to drive results and improve every aspect of the services we provide.");
            }
        }
        else {
          setActive(''); // handle click on currently active item
        }
      };
    return (
        isMobile? <div className="boxes-area aimbig">
			<div className="container">
				<div className="row">
					
					<div className="col-lg-6 col-md-12 services-content">
                        <div className="section-title">
                            <h2 className='gocom-values text-center'>GoCommerce Values</h2>
                            <h1 className='gocom-values-below text-center'><span className={` ${active === 'item1' ? "active" : ""}`} onClick={() => onSetActiveItem('item1')}>A</span>
								<span className={` ${active === 'item2' ? "active" : ""}`} onClick={() => onSetActiveItem('item2')}>I</span>
								<span className={` ${active === 'item3' ? "active" : ""}`} onClick={() => onSetActiveItem('item3')}>M</span>
								<span className={` ${active === 'item4' ? "active" : ""}`} onClick={() => onSetActiveItem('item4')}>B</span>
								<span className={` ${active === 'item5' ? "active" : ""}`} onClick={() => onSetActiveItem('item5')}>I</span>
								<span className={` ${active === 'item6' ? "active" : ""}`} onClick={() => onSetActiveItem('item6')}>G</span>
								
							</h1>
                            <h1 className='gocom-values-accountabilities text-center'>{title}</h1>
							<p className='gocom-values-desc text-center'>{content}</p>										
                        </div>
						<div class="text-center">
						<Link href="/contact">
							<a className="join-with-us text-center">JOIN OUR TEAM</a>
						</Link>
						</div>
						
					</div>
				</div>
			</div>
		</div>: <div></div>
    )
}

export default OurMission;
