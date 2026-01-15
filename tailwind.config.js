/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Paleta Industrial H2D
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9', // Azul Tech Principal
                    600: '#0284c7',
                    700: '#0369a1',
                    900: '#0c4a6e',
                },
                slate: {
                    850: '#1e293b', // Um tom específico para fundos "dark mode" leves
                    950: '#020617', // Quase preto
                }
            },
            animation: {
                'scroll': 'scroll 40s linear infinite',
                'blob': 'blob 7s infinite',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}