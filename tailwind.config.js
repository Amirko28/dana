/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './styles/tailwind/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            height: {
                '1/12': '8.33333%',
                '2/12': '16.66666%',
                '3/12': '25%',
                '4/12': '33.33333%',
                '5/12': '41.66666%',
                '6/12': '50%',
                '7/12': '58.33333%',
                '8/12': '66.66666%',
                '9/12': '75%',
                '10/12': '83.33333%',
                '11/12': '91.66666%',
            },
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
