/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				nb: "860px",
			},
			backgroundImage: {
				hero: "linear-gradient(180deg,rgba(0,0,0,.7) 0,rgba(0,0,0,0.2) 55%,rgba(0,0,0,.7))",
			},
			scale: {
				105: "1.05",
			},
			borderWidth: {
				DEFAULT: "1px",
			},
		},
	},
	plugins: [require("daisyui")],
};
