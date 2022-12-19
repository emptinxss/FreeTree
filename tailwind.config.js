/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class",

    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./formkit.config.js",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            chiaro: "#f2f2f2",
            scuro: "#111111",
            arancio: "#ffb632",
            viola: "#6D70C6",
            white: "#ffffff",
            black: "#000000",
            orange: colors.orange,
            red: colors.red,
            green: colors.green,
            blue: colors.blue,
            gray: colors.gray,
            indigo: colors.indigo,
            Fuchsia: colors.fuchsia,
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@formkit/themes/tailwindcss"),
    ],
};
//182628 scuro
