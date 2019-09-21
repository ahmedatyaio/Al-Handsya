import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Logo } from './Menu';

const StyledFooter = styled.footer`
  max-width: ${props => props.theme.responsive.maxWidth};
  margin: 8rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .left {
    width: 25%;
    text-align: left;
    h3 {
      color: #848282;
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-top: 2rem;
    }
    .mail {
      color: #a5a5a5;
      font-size: 1.5rem;
      &:hover {
        text-decoration: underline;
      }
    }
    .phone {
      font-family: ${props => props.theme.fonts.primary};
      color: #555555;
    }
  }
  .right {
    width: 70%;
    text-align: left;
    .footer-blocks {
      display: flex;
      justify-content: space-between;
      ul {
        padding: 0;
        li {
          margin-bottom: 2rem;
          a {
            color: #848282;
          }
        }
      }
    }
  }
  .footer-bottom {
    margin-top: 0.8rem;
    color: #848282;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    margin-top: 10rem;
    .left {
      width: 90%;
      margin: auto;
      .footer-logo {
        h1 {
          margin-top: 2rem;
        }
      }
      h3 {
        text-align: center;
      }
      a {
        display: block;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .right {
      width: 100%;
      margin-top: 4rem;
      .footer-blocks {
        width: 90%;
        flex-wrap: wrap;
        margin: auto;
        .block {
          width: 50%;
        }
      }
    }
  }
`;

const FooterComponent = () => {
  return (
    <StyledFooter>
      <div className="left">
        <Logo className="footer-logo">
          <Link to="/">
            <span className="icon-logo"></span>
            <div>
              <h1>Al-Handsya</h1>
              <p>For Construction and Real Estate</p>
            </div>
          </Link>
        </Logo>
        <h3>
          6 Al Nile Al Abyad St, Lebanon Sq, Mohandseen - Giza, Arab Republic of
          Egypt.
        </h3>
        <a className="mail" href="mailto:alhandsya@alhandsya.com">
          alhandsya@alhandsya.com
        </a>
        <p className="phone">(+20) 1155184811</p>
      </div>
      <div className="right">
        <div className="footer-blocks">
          <div className="block">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/">General Construction</Link>
              </li>
              <li>
                <Link to="/">Specialized Engineering</Link>
              </li>
              <li>
                <Link to="/">Construction Chemicals</Link>
              </li>
              <li>
                <Link to="/">Kryton Distributors</Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3>Products</h3>
            <ul>
              <li>
                <Link to="/">Kryton Waterproofing</Link>
              </li>
              <li>
                <Link to="/">Insuwrap PVC</Link>
              </li>
              <li>
                <Link to="/">Alchimica</Link>
              </li>
              <li>
                <Link to="/">Olin</Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3>Kryton</h3>
            <ul>
              <li>
                <Link to="/">Why Kryton</Link>
              </li>
              <li>
                <Link to="/">What is Kryton</Link>
              </li>
              <li>
                <Link to="/">Where to use Kryton</Link>
              </li>
              <li>
                <Link to="/">Kryton Systems</Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3>Distributors</h3>
            <ul>
              <li>
                <Link to="/">Kryton Waterproofing</Link>
              </li>
              <li>
                <Link to="/">Insuwrap PVC</Link>
              </li>
              <li>
                <Link to="/">Alchimica</Link>
              </li>
              <li>
                <Link to="/">Olin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alhandsya. All Rights Reserved.</p>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;
