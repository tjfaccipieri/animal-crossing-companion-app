/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner-acnh': 'url(/animal-crossing-new-horizons-banner.jpg)',
      },
      fontFamily: {
        custom: ["Love Ya Like A Sister"]
      }
    },
  },
  plugins: [],
};
