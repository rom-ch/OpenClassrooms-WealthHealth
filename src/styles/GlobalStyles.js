import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --clr-1: #738821;
  --clr-2: #E9EDDF;
  --clr-3: #B0B99A;
  --clr-4: #0F0F0F;

  --clr-5: #4B5425;
  --clr-6: #DCED98;
  --clr-7: #738720;
  --clr-8: #F7FFD6;
  --clr-9: #F3FFC2;

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
