/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				netflix: ["Netflix Sans", "sans-serif"],
				noto: ["Noto Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
