/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: {
					light: "#F2F2F1",
					DEFAULT: "#E7E5E4",
				},
				principal: {
					light: "#B48FF5",
					DEFAULT: "#7C3AED",
				},
				secondary: {
					light: "#9DE7D3",
					DEFAULT: "#4BD2AE",
				},
				highlight: {
					light: "#FE7E34",
					DEFAULT: "#FE640B",
					dark: "#B84600",
				},
				chars: {
					light: "#57534e",
					DEFAULT: "#44403C",
					strong: "#292524",
				},
				"dark-background": {
					light: "#413E3A",
					DEFAULT: "#44403C",
				},
				"dark-principal": {
					light: "#C1A1F7" /* #3F7 */,
					DEFAULT: "#7C3AED",
				},
				"dark-secondary": {
					light: "#9DE7D3",
					DEFAULT: "#4BD2AE",
				},
				"dark-highlight": {
					light: "#FF9A5C",
					DEFAULT: "#FE640B",
					dark: "#B84600",
				},
				"dark-chars": {
					light: "#BABFCA",
					DEFAULT: "#E7E5E4",
					strong: "#FFF",
				},
			},
			fontFamily: {
				primary: ["Plus Jakarta Sans"],
			},
		},
	},
	plugins: [],
};
