/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // Next.js App Router 사용 시
      "./pages/**/*.{js,ts,jsx,tsx}", // 만약 Pages Router 사용 시
      "./components/**/*.{js,ts,jsx,tsx}",
      "./ui/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };