/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      para: ["'Space Grotesk'", "sans-serif"],
    },
    extend: {
      dropShadow: {
        custom: "2px 2px 3px #03f1fd ",
      },
      boxShadow: {
        "3dbtn":
          " 2px 2px 5px #00000080,inset -5px -5px 8px #00000040, inset 3px 5px 8px #ffffff20;",
      },
      colors: {
        bgPrimary: "var(--bgPrimary)",
        primary: "var(--primary)",
        txtclr: "var(--txtclr)",
        txtbtn: "var(--txtbtn)",
        bgSecondary: "var(--bgSecondary)",
        semitrans: "#00000070",
      },
      backgroundImage: {
        btn: " linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5)",
        bgImg: 'url("/images/bgImg2.jpg")',
        bg4: "url('/images/bg4.jpg')",
        bg2: "url('/images/bg3.jpg')",
        bg5: "url('/images/bg5.jpg')",
        bg6: "url('/images/bg6.jpg')",
        bg7: "url('/images/bg7.jpg')",
        bg8: "url('/images/bg8.jpg')",
        bgm: "url('/images/bgm.jpg')",
      },
      animation: {
        shine: "shine 12s linear infinite",
        pop: "pop 2s ease",
      },
      keyframes: {
        shine: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pop: {
          "0%": { opacity: "0", transform: "translateY(2000px)" },
          "60%": { opacity: "1", transform: "translateY(-20px)" },
          "80%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
