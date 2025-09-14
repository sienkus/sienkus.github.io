// tailwind.config.js
const { Montserrat, Noto_Serif } = require('next/font/google');

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#EDF2EF',
        foreground: '#212738',
        raisinBlack: '#212738',
        bittersweet: '#F97068',
        pear: '#D1D646',
        vividSkyBlue: '#57C4E5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
    },
  },
};

