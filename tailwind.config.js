// tailwind.config.js

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // Ensure this path includes your components folder
        './src/app/**/*.{js,ts,jsx,tsx}', // This should cover the 'app' folder where layout and pages are
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}