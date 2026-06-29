/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: "#12324a",
        ink: "#20313d",
        teal: "#4f9c9a",
        mist: "#eef6f5",
        cloud: "#f6f8fa",
        gold: "#c9a24d"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 28px 80px rgba(18, 50, 74, 0.14)",
        glow: "0 18px 60px rgba(79, 156, 154, 0.22)"
      }
    }
  },
  plugins: []
};
