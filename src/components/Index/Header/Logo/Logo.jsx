import logoOne from '../../../../assets/Logo.svg'
import logoTwo from '../../../../assets/LogoEBig.svg'
import React, { useState, useEffect } from 'react';
const Logo = () =>{
    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        setScrollDistance(scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollDistance]);
    return(
        <>
        {scrollDistance < 300 && (
            <a href=''><img src={logoOne} alt="" /></a>
          )}
          {scrollDistance >= 300 && (
            <a href=''><img src={logoTwo} alt="" /></a>
      )}
      </>
    )
}


export default Logo 