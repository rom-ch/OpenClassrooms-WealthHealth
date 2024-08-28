import { createGlobalStyle } from "styled-components";
import PoppinsRegularEOT from "../fonts/Poppins-Regular.eot";
import PoppinsRegularSVG from "../fonts/Poppins-Regular.svg";
import PoppinsRegularTTF from "../fonts/Poppins-Regular.ttf";
import PoppinsRegularWOFF from "../fonts/Poppins-Regular.woff";
import PoppinsRegularWOFF2 from "../fonts/Poppins-Regular.woff2";

import PoppinsMediumEOT from "../fonts/Poppins-Medium.eot";
import PoppinsMediumSVG from "../fonts/Poppins-Medium.svg";
import PoppinsMediumTTF from "../fonts/Poppins-Medium.ttf";
import PoppinsMediumWOFF from "../fonts/Poppins-Medium.woff";
import PoppinsMediumWOFF2 from "../fonts/Poppins-Medium.woff2";

import PoppinsSemiBoldEOT from "../fonts/Poppins-SemiBold.eot";
import PoppinsSemiBoldSVG from "../fonts/Poppins-SemiBold.svg";
import PoppinsSemiBoldTTF from "../fonts/Poppins-SemiBold.ttf";
import PoppinsSemiBoldWOFF from "../fonts/Poppins-SemiBold.woff";
import PoppinsSemiBoldWOFF2 from "../fonts/Poppins-SemiBold.woff2";

import PoppinsBoldEOT from "../fonts/Poppins-Bold.eot";
import PoppinsBoldSVG from "../fonts/Poppins-Bold.svg";
import PoppinsBoldTTF from "../fonts/Poppins-Bold.ttf";
import PoppinsBoldWOFF from "../fonts/Poppins-Bold.woff";
import PoppinsBoldWOFF2 from "../fonts/Poppins-Bold.woff2";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBoldEOT});
    src: url(${PoppinsSemiBoldEOT}) format('embedded-opentype'),
        url(${PoppinsSemiBoldWOFF2}) format('woff2'),
        url(${PoppinsSemiBoldWOFF}) format('woff'),
        url(${PoppinsSemiBoldTTF}) format('truetype'),
        url(${PoppinsSemiBoldSVG}) format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBoldEOT});
    src: url(${PoppinsBoldEOT}) format('embedded-opentype'),
        url(${PoppinsBoldWOFF2}) format('woff2'),
        url(${PoppinsBoldWOFF}) format('woff'),
        url(${PoppinsBoldTTF}) format('truetype'),
        url(${PoppinsBoldSVG}) format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegularEOT});
    src: url(${PoppinsRegularEOT}) format('embedded-opentype'),
        url(${PoppinsRegularWOFF2}) format('woff2'),
        url(${PoppinsRegularWOFF}) format('woff'),
        url(${PoppinsRegularTTF}) format('truetype'),
        url(${PoppinsRegularSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMediumEOT});
    src: url(${PoppinsMediumEOT}) format('embedded-opentype'),
        url(${PoppinsMediumWOFF2}) format('woff2'),
        url(${PoppinsMediumWOFF}) format('woff'),
        url(${PoppinsMediumTTF}) format('truetype'),
        url(${PoppinsMediumSVG}) format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}




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

  --color-success: hsla(120, 39%, 54%, 1);
  --color-warning: hsla(35, 84%, 62%, 1);
  --color-danger: hsla(2, 64%, 58%, 1);
  --color-info: hsla(194, 66%, 61%, 1);

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
