import React, { useState, useEffect } from 'react';

const ReadingProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentScrollY / scrollHeight).toFixed(4)) * 100);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
            <div 
                className="h-full bg-brand-500 transition-all duration-100 ease-out" 
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ReadingProgress;
