/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bgray: '#27272a',
        bgblack: '#040D12',
      },
      fontFamily: {
        head1: ['Bungee Spice'],
        head2: ['Aref Ruqaa Ink'],
        head3: ['Reem Kufi Fun'],
      }
    },
  },
  plugins: [],
}

