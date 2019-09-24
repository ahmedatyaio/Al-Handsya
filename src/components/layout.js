import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

import '../images/icons/icons.css';

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>Al-Handsya for Construction and Real Estate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Al-Handsya is a leading construction and real estate company based in Cairo, EG"
        />
        <link rel="icon" href={favicon} />
        <html lang="en" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menu />
            {children}
          </div>
          <Footer />
          <MobileMenu />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default Template;
