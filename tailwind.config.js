/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      height: {
        "navbar-height": "55.68px",
        "sec1-height": "570px",
        "sec2-height": "320px",
        "sec3-height": "470px",
        "sec4-height": "200px",
        "sec5-height": "450px",
        "sec6-height": "200px",
        footer: "300px",
        "respon-height-1": "700px",
        "respon-height-2": "900px",
        "respon-height-3": "500px",
        "respon-height-4": "750px",
      },
      borderWidth: {
        bottom: "1.5px",
        bo: "0.8px",
      },
      borderColor: {
        bordClr: "#f0f0f0",
      },
      colors: {
        color: "rgb(128 128 128)",
      },
      backgroundColor: {
        "foot-bg": "#f0f0f0",
      },
      screens: {
        screen1: "1070px",
        screen2: "942px",
        screen3: "892px",
        screen4: "877px",
        screen5: "864px",
        screen6: "781px",
        screen7: "576px",
        screen8: "441px",
        screen9: "352px",
        screen10: "544px",
      },
    },
  },
  plugins: [],
};
