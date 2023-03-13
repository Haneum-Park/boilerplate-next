import styled, { createGlobalStyle } from 'styled-components';

export const HMax = styled.div`
  font-size: calc(50rem / 16);
  font-family: 'Bold';
  line-height: calc(65rem / 16);
  letter-spacing: calc(-0.4rem / 16);
`;

export const H1 = styled.h1`
  font-size: calc(38rem / 16);
  font-family: 'Bold';
  line-height: calc(49rem / 16);
  letter-spacing: calc(-0.4rem / 16);

  @media screen and (max-width: 768px) {
    font-size: calc(32rem / 16);
    line-height: calc(38rem / 16);
  }
`;

export const H2 = styled.h2`
  font-size: calc(28rem / 16);
  font-family: 'Bold';
  line-height: calc(36rem / 16);
  letter-spacing: calc(-0.4rem / 16);

  @media screen and (max-width: 768px) {
    font-size: calc(24rem / 16);
    line-height: calc(34rem / 16);
  }
`;

export const H3 = styled.h3`
  font-size: calc(22rem / 16);
  font-family: 'Bold';
  line-height: calc(33rem / 16);
  letter-spacing: calc(-0.4rem / 16);

  @media screen and (max-width: 768px) {
    font-size: calc(21rem / 16);
    line-height: calc(30rem / 16);
  }
`;

export const H4 = styled.h4`
  font-size: calc(18rem / 16);
  font-family: 'Bold';
  line-height: calc(27rem / 16);
  letter-spacing: calc(-0.2rem / 16);
`;

interface CommonStyleProps {
  family?: 'Bold' | 'Regular';
}

export const Body1 = styled.div<CommonStyleProps>`
  font-size: calc(16rem / 16);
  font-family: ${({ family }) => family || 'Regular'};
  line-height: calc(20rem / 16);
  letter-spacing: calc(-0.2rem / 16);

  @media screen and (max-width: 768px) {
    font-size: calc(12rem / 16);
  }
`;

export const Body2 = styled.div<CommonStyleProps>`
  font-size: calc(14rem / 16);
  font-family: ${({ family }) => family || 'Regular'};
  line-height: calc(18rem / 16);
  letter-spacing: calc(-0.2rem / 16);
`;

export const Body3 = styled.div<CommonStyleProps>`
  font-size: calc(13rem / 16);
  font-family: ${({ family }) => family || 'Regular'};
  line-height: calc(18rem / 16);
  letter-spacing: calc(-0.2rem / 16);
`;

export const Caption1 = styled.div<CommonStyleProps>`
  font-size: calc(12rem / 16);
  font-family: ${({ family }) => family || 'Regular'};
  line-height: calc(16rem / 16);
  letter-spacing: calc(-0.2rem / 16);
`;

export const Caption2 = styled.div<CommonStyleProps>`
  font-size: calc(11rem / 16);
  font-family: ${({ family }) => family || 'Regular'};
  line-height: calc(14rem / 16);
  letter-spacing: calc(-0.2rem / 16);
`;

export const Specific = styled.div<CommonStyleProps>`
  font-size: calc(10rem / 16);
  font-family: ${({ family }) => family || 'Regular'};
  line-height: calc(12rem / 16);
  letter-spacing: calc(-0.2rem / 16);
`;

interface GlobalStylesProps {
  darkmode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  /*  IE and Edge Firefox */
  /* element {
    -ms-overflow-style: none; 
    scrollbar-width: none;
  } */

  /* Chrome, Safari, Opera*/
  /* element::-webkit-scrollbar {
    display: none;
  } */

  /* 
   * =====================
   *     GLOBAL STYLE
   * =====================
   */
  html,
  body,
  #__next {
    width: 100%;
    max-width: calc(1920rem / 16);
    padding: 0;
    margin: 0 auto;
    font-size: 16px;
    font-family: 'Thin', 'ExtraLight', 'Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold', 'Heavy';
    background-color: var(${({ darkmode }) => (darkmode ? '--color-gray-9' : '--color-gray-0')});
    color: var(${({ darkmode }) => (darkmode ? '--color-gray-0' : '--color-gray-9')});
  }
  
  div, span, applet, object, iframe,
  blockquote, pre, a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output,
  ruby, section, summary, time, mark, audio, video, button {
    font-size: 16px;
    font-family: 'Regular';
    color: var(${({ darkmode }) => (darkmode ? '--color-gray-0' : '--color-gray-9')});
  }

  /* @media (prefers-color-scheme: dark) {
    html,
    body,
    #__next {
      background-color: var(--color-gray-9);
      color: var(--color-gray-0);
    }
    
    div, span, applet, object, iframe,
    blockquote, pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
    sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot,
    thead, tr, th, td, article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, menu, nav, output,
    ruby, section, summary, time, mark, audio, video, button, *, *::before, *::after {
      color: var(--color-gray-0);
    }
  }

  @media (prefers-color-scheme: light) {
    html,
    body,
    #__next {
      background-color: var(--color-gray-0);
      color: var(--color-gray-9);
    }
    
    div, span, applet, object, iframe,
    blockquote, pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
    sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot,
    thead, tr, th, td, article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, menu, nav, output,
    ruby, section, summary, time, mark, audio, video, button *, *::before, *::after {
      color: var(--color-gray-9);
    }
  } */

  @media screen and (max-width: 1280px) {
    div, span, applet, object, iframe,
    blockquote, pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
    sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot,
    thead, tr, th, td, article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, menu, nav, output,
    ruby, section, summary, time, mark, audio, video, button {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    div, span, applet, object, iframe,
    blockquote, pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
    sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot,
    thead, tr, th, td, article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, menu, nav, output,
    ruby, section, summary, time, mark, audio, video, button {
      font-size: 12px;
    }
  }

  *, *::before, *::after {
    font-size: 16px;
    font-family: 'Regular';
    color: var(${({ darkmode }) => (darkmode ? '--color-gray-0' : '--color-gray-9')});
  }

  a { 
    text-decoration: none;
    /* color: var(--color-white-normal); */
  }

  ul, li {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }

  button, a, input[type=button], input[type=submit] {
    cursor: pointer;
  }

  label {
    user-select: none;
  }

  button:focus, select:focus, select:active, button:active, input:active, input:focus {
    outline: none !important;
  }

  input {
    background-color: var(--color-white);
  }
`;

export default GlobalStyles;
