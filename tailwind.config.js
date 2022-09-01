module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2.5rem',
          lg: '5rem',
          xl: '1.875rem',
        },
      },
      colors: {
        'blue-primary': '#0977BE',
        'blue-secondary': '#005BAF',
        'blue-third': '#1E95DD',
        'blue-fourth': '#2BA0E7',
        'green-primary': '#08A524',
        'green-secondary': '#22BB3E',
        'yellow-primary': '#F7DE06',
        'orange-primary': '#FF8017',
        'pink-primary': '#F63C52',
        'pink-secondary': '#FFE0E0',
        'pink-third': '#F94759',
        'black-primary': '#1C1D20',
        'black-secondary': '#333539',
        'black-third': '#3E3F43',
        'gray-primary': '#ACAEB2',
        'gray-secondary': '#94969B',
        'gray-third': '#C0C2C6',
      },
      screens: {
        xsm: { max: '376px' },
        sm: { max: '426px' },
      },
    },
  },
  plugins: [],
};
