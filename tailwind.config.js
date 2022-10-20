/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './styles/tailwind/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#d3deff',
                primary: '#4d4dff',
                secondary: '#3655b3',
                tertiary: '#a6bcff',
            },
        },
        fontFamily: {
            body: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
};
