/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                "custom-green": "#00FF00", // Example custom color
            },
            boxShadow: {
                glow: "0 0 10px rgba(0, 255, 0, 0.7)", // Example custom glow
            },
        },
    },
    plugins: [],
};
