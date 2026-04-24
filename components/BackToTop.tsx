import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BackToTop: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-40 p-3 bg-[#1A1A1A] text-white rounded-full shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:bg-[#00F0FF] hover:text-black hover:-translate-y-1 transition-all duration-300 ring-1 ring-[#00F0FF]/20 hover:ring-[#00F0FF]/50"
                    aria-label={t('floating.backToTop')}
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
