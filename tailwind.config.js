module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-select/dist/index.esm.js",
	],

	// enable dark mode via class strategy
	darkMode: "class",

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
		},
	},
	plugins: [require("daisyui")],
};
