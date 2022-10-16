/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './styles/tailwind/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            body: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [require('daisyui')],
};
