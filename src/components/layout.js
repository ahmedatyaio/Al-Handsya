import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

import IconAppleTouch from '../images/favicon/apple-touch-icon.png';
import FavIcon32 from '../images/favicon/favicon-32x32.png';
import FavIcon16 from '../images/favicon/favicon-16x16.png';
import SafariTab from '../images/favicon/safari-pinned-tab.svg';

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
        <link rel="apple-touch-icon" sizes="180x180" href={IconAppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={FavIcon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={FavIcon16} />
        <link rel="mask-icon" href={SafariTab} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d"></meta>
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
