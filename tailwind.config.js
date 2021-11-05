// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                custom: {
                    header: '#FFDBAA',
                    button: '#805215',
                    text: '#553100',
                    background: '#D4A76A'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}