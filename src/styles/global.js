import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

html {
 line-height: 1.15;
 -webkit-text-size-adjust: 100%;
 font-size: 10px;
 font-family: "Source Sans Pro, sans-serif";
}

button {
  outline: 0;
}

body {
 margin: 0;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

main {
 display: block;
}

h1 {
 font-size: 2em;
 margin: 0.67em 0;
}

hr {
 box-sizing: content-box;
 height: 0;
 overflow: visible;
}

pre {
 font-family: monospace, monospace;
 font-size: 1em;
}

a {
 background-color: transparent;
}

abbr[title] {
 border-bottom: none;
 text-decoration: underline;
 text-decoration: underline dotted;
}

b,
strong {
 font-weight: bolder;
}

code,
kbd,
samp {
 font-family: monospace, monospace;
 font-size: 1em;
}

small {
 font-size: 80%;
}

sub,
sup {
 font-size: 75%;
 line-height: 0;
 position: relative;
 vertical-align: baseline;
}

sub {
 bottom: -0.25em;
}

sup {
 top: -0.5em;
}

img {
 border-style: none;
}

button,
input,
optgroup,
select,
textarea {
 font-family: inherit;
 font-size: 100%;
 line-height: 1.15;
 margin: 0;
}

button,
input {
 overflow: visible;
}

button,
select {
 text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
 -webkit-appearance: button;
}

button: : -moz-focus-inner,
[type="button"]: : -moz-focus-inner,
[type="reset"]: : -moz-focus-inner,
[type="submit"]: : -moz-focus-inner {
 border-style: none;
 padding: 0;
}

button: -moz-focusring,
[type="button"]: -moz-focusring,
[type="reset"]: -moz-focusring,
[type="submit"]: -moz-focusring {
 outline: 1px dotted ButtonText;
}

fieldset {
 padding: 0.35em 0.75em 0.625em;
}

legend {
 box-sizing: border-box;
 color: inherit;
 display: table;
 max-width: 100%;
 padding: 0;
 white-space: normal;
}

progress {
 vertical-align: baseline;
}

textarea {
 overflow: auto;
}

[type="checkbox"],
[type="radio"] {
 box-sizing: border-box;
 padding: 0;
}

[type="number"]: : -webkit-inner-spin-button,
[type="number"]: : -webkit-outer-spin-button {
 height: auto;
}

[type="search"] {
 -webkit-appearance: textfield;
 outline-offset: -2px;
}

[type="search"]: : -webkit-search-decoration {
 -webkit-appearance: none;
}

: : -webkit-file-upload-button {
 -webkit-appearance: button;
 font: inherit;
}

details {
 display: block;
}

summary {
 display: list-item;
}

template {
 display: none;
}

[hidden] {
 display: none;
}
.open-full-mobile-menu {
  transform: translate3d(0, 0, 0) !important;
}
.active-kryton-page {
  background: ${theme.colors.black};
  color: #fff !important;
}

.container {
  max-width: 1150px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
}

.current-page {
  color: ${theme.colors.black};
  border-bottom: 2px solid ${theme.colors.yellow2};
}
.current-page-mobile {
  color: ${theme.colors.yellow};
  img {
    color: ${theme.colors.yellow};
  }
}
.service-block {
  width: 25%;
  padding: 3.5rem 2.5rem;
  display: flex;
  align-items: center;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 35%;
  }
  .block-right-side {
    width: 75%;
    h1 {
      font-family: ${theme.fonts.primary};
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
    a {
      font-family: ${theme.fonts.secondary};
      font-weight: 600;
      text-decoration: none;
      color: #515151;
    }
  }
  .block-left-side {
    width: 25%;
    font-size: 4rem;
    text-align: right;
  }
}
footer {
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: ${theme.fonts.secondary};
  font-weight: 600
}
`;
export default GlobalStyle;
