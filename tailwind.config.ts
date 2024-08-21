import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Adding custom utilities
      unicodeBidi: {
        normal: 'unicode-bidi: normal;',
        embed: 'unicode-bidi: embed;',
        'bidi-override': 'unicode-bidi: bidi-override;',
        isolate: 'unicode-bidi: isolate;',
        'isolate-override': 'unicode-bidi: isolate-override;',
        plaintext: 'unicode-bidi: plaintext;',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': '#8c82f4',
      'white': '#ffffff',
      'black': '#000000',
      'primary': {
        50: '#f3e8fe',
        100: '#e6d1fd',
        200: '#cba9fc',
        300: '#b181fb',
        400: '#965afa',
        500: '#883df2',
        600: '#7024e6',
        700: '#580bca',
        800: '#3f0aad',
        900: '#260890',
      },
      'secondary': {
        50: '#ffffff',
        100: '#ffffff',
        200: '#ffffff',
        300: '#ffffff',
        400: '#ffffff',
        500: '#ffffff',
        600: '#e6e6e6',
        700: '#cccccc',
        800: '#b3b3b3',
        900: '#999999',
      },
      'content': {
        'primary': '#313235',
      },
      'background': {
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#ffffff',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e }) {
      const newUtilities = {
        '.unicode-bidi-normal': {
          unicodeBidi: 'normal',
        },
        '.unicode-bidi-embed': {
          unicodeBidi: 'embed',
        },
        '.unicode-bidi-bidi-override': {
          unicodeBidi: 'bidi-override',
        },
        '.unicode-bidi-isolate': {
          unicodeBidi: 'isolate',
        },
        '.unicode-bidi-isolate-override': {
          unicodeBidi: 'isolate-override',
        },
        '.unicode-bidi-plaintext': {
          unicodeBidi: 'plaintext',
        },
      };

      // Add utilities without the variants option
      addUtilities(newUtilities);
    }),
  ],
};