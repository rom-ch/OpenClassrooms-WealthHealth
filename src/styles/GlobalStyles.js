import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-grey-0: #fff;
  --color-grey-50: #fafafa;
  --color-grey-100: #f5f5f5;
  --color-grey-200: #eeeeee;
  --color-grey-300: #e0e0e0;
  --color-grey-400: #bdbdbd;
  --color-grey-500: #9e9e9e;
  --color-grey-600: #757575;
  --color-grey-700: #616161;
  --color-grey-800: #424242;
  --color-grey-900: #212121;

  --color-green-50: #F3FCCE;
  --color-green-100: #EBFAAE;
  --color-green-200: #E3F88E;
  --color-green-300: #DAF66E;
  --color-green-400: #A8CF0D;
  --color-green-500: #8EAF0B;
  --color-green-600: #748F09;
  --color-green-700: #5A6F07;
  --color-green-800: #333F04;
  --color-green-900: #191F02;

}

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  color: #1f2937;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;

}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
ul {
  list-style: none;
  padding: 0;
}

#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
