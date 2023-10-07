/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  screens: {
			'xs': {'min': '200px', 'max': '414px'}
		  },
		},
	  },
	plugins: [],
}
