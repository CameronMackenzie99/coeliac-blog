/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      serif: ['Sanchez', 'serif'],
    },
    extend: {
      typography: {
        sm: {
          css: [
            {
              a: {
                textDecoration: 'none',
              },
            },
          ],
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-extended-shadows'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
