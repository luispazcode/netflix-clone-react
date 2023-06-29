/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@rewind-ui/core/dist/theme/styles/Accordion.styles.js",
	],
	theme: {
		extend: {
			fontFamily: {
				netflix: ["Netflix Sans", "sans-serif"],
				noto: ["Noto Sans", "sans-serif"],
			},
			colors: {
				primary: "#e50914",
				secondary: "#2d2d2d",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-scrollbar")({ nocompatible: true }),
		require("@tailwindcss/forms")({
			strategy: "class", // only generate classes
		}),
	],
};
