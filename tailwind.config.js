/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
	"./src/**/*.{js,jsx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md:"768px",
		lg:"960px",
		xl:"1200px",
	},
	fontFamily: {
		primary: "Inter",
	},
  	extend: {
  		colors: {
  			background: '#1E1E1E',
  			foreground: '#27272C',
			primary: "20B2AA"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
