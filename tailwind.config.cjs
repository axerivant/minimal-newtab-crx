/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				800: '#0E1116',
				700: '#151A21',
				600: '#272F3A',
				200: '#5E6D83'
			}
		}
	},
	plugins: []
}
