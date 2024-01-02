/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: {
					light: "#B48FF5",
					DEFAULT: "#7C3AED",
				},
				secondary: {
					light: "#9DE7D3",
					DEFAULT: "#4BD2AE",
				},
				highlight: {
					light: "#FF9A5C",
					DEFAULT: "#FE640B",
					dark: "#B84600",
				},
				chars: {
					light: "#57534e",
					DEFAULT: "#44403C",
					strong: "#292524",
				},
			},
			fontFamily: {
				primary: ["Plus Jakarta Sans"],
			},
		},
	},
	plugins: [],
};
