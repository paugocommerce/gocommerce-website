import React, {useState} from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const DesktopBlank = () => {

    const currentYear = new Date().getFullYear();
    const [style, setStyle] = useState({display: 'none'});

    return (
        <div></div>
    )
     
}

export default DesktopBlank; 