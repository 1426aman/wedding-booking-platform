/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-h': 'var(--text-h)',
        accent: 'var(--accent)',
        'accent-bg': 'var(--accent-bg)',
      },
    },
  },
  plugins: [],
}

