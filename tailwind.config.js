/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        primary: 'rgb(var(--color-text-primary))',
        secondary: 'rgb(var(--color-text-secondary))',
        inverted: 'rgb(var(--color-text-inverted))',
      },
      backgroundColor: {
        primary: 'rgb(var(--color-primary))',
        'secondary-1': 'rgb(var(--color-secondary-1))',
        'secondary-2': 'rgb(var(--color-secondary-2))',
        inverted: 'rgb(var(--color-inverted))',
      },
    },
  },
  plugins: [],
};
