import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root, footer {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background: black;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::-webkit-scrollbar {
    width: 17px;
  }

  body::-webkit-scrollbar-track {
    background: black;
  }
  
  body::-webkit-scrollbar-thumb {
    background: gray;
  }

  ul, ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0;
    font: inherit;
    background: none;
    color: inherit;
    border: none;
  }

  body:not(.tab) button:focus,
  body:not(.tab) input:focus,
  body:not(.tab) select:focus,
  body:not(.tab) textarea:focus,
  body:not(.tab) a:focus {
    outline: 1px solid transparent;
  }
`;

const generateMedia = (number: number): string => (
  `@media only screen and (max-width: ${number}px)`
);

const globalTheme = {
  breakpoints: {
    extraSmall: generateMedia(400),
    small: generateMedia(576),
    medium: generateMedia(768),
    large: generateMedia(1024),
    extraLarge: generateMedia(1200)
  },
  topbarHeight: '80px',
  topbarBgColor: '#280808',
  secondaryBgColor: '#392c2c',
  hoverColor: '#c41010',
  primaryTextColor: 'rgba(255, 255, 255, 1)',
  secondaryTextColor: 'rgba(255, 255, 255, 0.9)',
  tertiaryTextColor: 'rgba(255, 255, 255, 0.8)',
  quaternaryTextColor: 'rgba(255, 255, 255, 0.7)',
  pageBgColor: '#0b0b0b',
  boxBgColor: '#272727'
};

export { GlobalStyle, globalTheme };
