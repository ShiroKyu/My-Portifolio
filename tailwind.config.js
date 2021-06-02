module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Roboto', 'ui-monospace', 'SFMono-Regular'],
    },
    rotate: {
      0: '0',
      45: '45deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      270: '270deg',
      360: '360deg',
    },
    extend: {
      colors: {
        'section-gray-bg': '#e3e9f2',
      },
      screens: {
        xsm: '320px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};
