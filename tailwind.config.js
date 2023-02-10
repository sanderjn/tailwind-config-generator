/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./**/*.html"],
    theme: {
        container: (theme) => ({
            center: true,
            padding: theme("spacing.6"),
        }),
        extend: {
            colors: {
                primary: colors.sky,
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
