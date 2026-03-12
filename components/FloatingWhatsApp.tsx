import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FloatingWhatsApp: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.a
            href="https://wa.me/5585997629938"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all duration-300"
            aria-label={t('floating.aria')}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
            >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
            
            {/* Ping animation behind the icon */}
            <span className="absolute -z-10 w-full h-full rounded-full bg-green-400 opacity-40 animate-ping"></span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
