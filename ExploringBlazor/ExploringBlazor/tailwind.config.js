/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    darkMode: "media",
    content: ["./**/*.{razor,html,cshtml}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        fontFamily: {
            'sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            lineHeight: {
                "base": "1.125rem"
            },
            colors: {
                'primary': {
                    '50': '#DFE8FB',
                    '100': '#C5D3F8',
                    '200': '#85A5F1',
                    '300': '#4E7AEB',
                    '400': '#2654DA',
                    '500': '#1A3B9A',
                    '600': '#15307D',
                    '700': '#0F235C',
                    '800': '#08173C',
                    '900': '#040D21',
                    '950': '#02050D',
                },
                "usual": {
                    '50': '#FCFCFD',
                    '100': '#EEF0F1',
                    '200': '#C1C8CD',
                    '300': '#A8B1B9',
                    '400': '#8F9BA5',
                    '500': '#768390',
                    '600': '#616D77',
                    '700': '#4C565E',
                    '800': '#3A4147',
                    '900': '#25292E',
                    '950': '#1A1D20',
                },
                'secondary': {
                    '50': "#F7E7F8",
                    '100': "#F0D4F2",
                    '200': "#DFA4E4",
                    '300': "#D079D8",
                    '400': "#BF4ACA",
                    '500': "#9F32AA",
                    '600': "#7E2786",
                    '700': "#601E66",
                    '800': "#3F1443",
                    '900': "#210A23",
                    '950': "#0F0510"
                },
                'positive': {
                    '50': "#ECFDF1",
                    '100': "#DEFCE7",
                    '200': "#B9F9CB",
                    '300': "#98F6B2",
                    '400': "#72F397",
                    '500': "#4FF07D",
                    '600': "#14EB51",
                    '700': "#0FB33E",
                    '800': "#0A7528",
                    '900': "#053D15",
                    '950': "#021C0A"
                },
                'negative': {
                    '50': "#FAEDEC",
                    '100': "#F7DFDF",
                    '200': "#EFBCBA",
                    '300': "#E99C9A",
                    '400': "#E37976",
                    '500': "#DE5C56",
                    '600': "#D83428",
                    '700': "#A3261D",
                    '800': "#6B1712",
                    '900': "#370A08",
                    '950': "#190303"
                }
            },
        },
    },

    plugins:
        [
            require('flowbite/plugin')
        ],
}
