/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        panel: "#101012",
        panel2: "#141416",
        line: "rgba(255,255,255,.12)",
        ember: "#FF3D14",
        emberLight: "#FF6A45",
        gold: "#F2C14E",
        muted: "#8A8A90",
        body: "#B8B8BE",
        offwhite: "#D6D6DA",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        cond: ["'Barlow Condensed'", "sans-serif"],
        sans: ["Archivo", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        rise: { from: { opacity: 0, transform: "translateY(28px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        pulse2: { "0%,100%": { opacity: 0.35 }, "50%": { opacity: 1 } },
        scrollHint: { "0%": { transform: "translateY(0)", opacity: 0 }, "30%": { opacity: 1 }, "100%": { transform: "translateY(14px)", opacity: 0 } },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        rise: "rise .28s cubic-bezier(.2,.8,.2,1) both",
        pulse2: "pulse2 1.8s ease-in-out infinite",
        scrollHint: "scrollHint 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
