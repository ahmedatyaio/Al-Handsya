import React from "react"
import { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import favicon from "../images/favicon.ico"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"
import Menu from "../components/Menu"
import MobileMenu from "../components/MobileMenu"
import Footer from "../components/Footer"

import "../images/icons/icons.css"

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>Al-Handsya for Construction and Real Estate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description="Al-Handsya is a leading construction and real estate company based in Cairo, EG" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menu />
            {children}
            <MobileMenu />
          </div>
          <Footer />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export default Template
