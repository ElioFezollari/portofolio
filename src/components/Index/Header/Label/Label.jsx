import React, { useState, useEffect } from 'react';
import Menu from './Menu/Menu';

const Label = () => {
    const [scrollDistance, setScrollDistance] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrollDistance(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCheckboxChange = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    return (
        <>
            {scrollDistance < 300 ? (
                <>
                    <label htmlFor="check">
                        <input type="checkbox" id="check" onChange={handleCheckboxChange} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    {isMenuOpen && <Menu />}
                </>
            ) : (
                <>
                <label htmlFor="check">
                    <input type="checkbox" id="check" onChange={handleCheckboxChange} />
                    <span className='black'></span>
                    <span className='black'></span>
                    <span className='black'></span>
                </label>
                {isMenuOpen && <Menu />}
                </>
            )}
        </>
    );
};

export default Label;
