/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	// purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{ts,tsx}',
		'./src/pages/*.{ts,tsx}',
		'./src/features/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans],
			},
			colors: {
				dark: '#1b1b1b',
				light: '#f5f5f5',
				mid: '#DBD6D6',
				amber_100: '#f5d986',
				amber_200: '#f5b486',
				amber_300: '#eca988',
				amber_400: '#e49e71',
				amber_500: '#d88459',
				amber_600: '#c16c42',
				amber_700: '#a7562b',
				contrast_50: '#86aaf5',
				description_light: '#bdbdbd',
				description: '#8a8a8a',
				footer: '#fefefe',

				linkedIn: '#0077b5',
				github: '#2ea44f',
			},
		},
	},
};
