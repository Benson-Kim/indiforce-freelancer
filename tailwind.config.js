/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-teal": "#0F9098",
				"primary-dark": "#484848",
				"dark-gray": "#A9A9A9",
				"dark-light": "#C0C0C0",
				"primary-gray": "#E8E8E8",
				"secondary-gray": "#F5F5F5",
				"primary-white": "#FFFFFF",
			},
			backgroundImage: {
				"hero-pattern": "url('../src/assets/images/bg.jpg')",
				"register-cover": "url('../src/assets/images/register.svg')",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
