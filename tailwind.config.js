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
					light: "#FE640B",
					DEFAULT: "#44403C",
				},
				terciary: {
					light: "#9DE7D3",
					DEFAULT: "#4BD2AE",
				},
			},
		},
	},
	extend: {
		fontFamily: {
			primary: ["Plus Jakarta Sans"],
		},
	},
	plugins: [],
};
