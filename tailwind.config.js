/** @type {import('tailwindcss').Config} */
/* const withMT = require("@material-tailwind/react/utils/withMT") */
import daisyui from "daisyui";

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light", "dark", "winter"],
	},
};
