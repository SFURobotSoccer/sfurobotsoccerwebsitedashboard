import React, { useState, useEffect } from 'react';
import { FiArrowUp } from "react-icons/fi";

const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed z-80 bottom-8 right-10">
            {isVisible && (
                <button onClick={toTop} id='buttonPrimary' className='flex items-center gap-2 plus-jakarta-sans-button text-sm px-3 py-3 tracking-wide rounded-md'> 
                    <FiArrowUp strokeWidth={3} />
                </button>
            )}
        </div>
    )
}
