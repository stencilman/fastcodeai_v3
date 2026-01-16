"use client";

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

const ClientWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const minimumTime = 6000; // Minimum time in milliseconds
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minimumTime - elapsedTime;

            setTimeout(() => {
                setIsLoading(false); // Set isLoading to false to hide the preloader
            }, remainingTime > 0 ? remainingTime : 0);
        };

        // Listen for the window load event
        window.addEventListener('load', handleLoad);


        if (document.readyState === 'complete') {
            handleLoad();
        }

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className="relative">
            <div className={` ${isLoading ? 'opacity-100 fixed inset-0 transition-opacity duration-1000' : 'opacity-0 hidden'}`}>
                <Preloader />
            </div>
            <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </div>
    );
};

export default ClientWrapper;
