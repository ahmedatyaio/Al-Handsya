import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import SEO from './seo';

const DistributorPage = ({ children, title }) => {
  const StyledHeader = styled.div`
    height: 20vh;
    position: relative;
    background: #f7f7f7;
    .content {
      max-width: ${props => props.theme.responsive.maxWidth};
      width: 90%;
      margin: 0 auto;
      h1 {
        position: absolute;
        bottom: 2rem;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 4rem;
        @media (max-width: 450px) {
          font-size: 3rem;
          width: 90%;
        }
      }
    }
  `;
  const StyledMenu = styled.ul`
    display: flex;
    position: relative;
    padding: 0;
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: -3rem auto;
    li {
      font-size: 1.5rem;
      margin-right: 3rem;
      font-family: ${props => props.theme.fonts.secondary};
      border: 1px solid ${props => props.theme.colors.black};
      a {
        color: ${props => props.theme.colors.black};
        padding: 1.5rem 2rem;
        display: inline-block;
        letter-spacing: 0.1rem;
        &:hover {
          color: #ffffff;
          background: ${props => props.theme.colors.black};
        }
      }
    }

    @media (max-width: 834px) {
      li {
        margin-right: 2rem;
        a {
          padding: 1.5rem;
        }
      }
    }
    @media (max-width: 450px) {
      overflow-x: auto;
      li {
        flex: 0 0 auto;
      }
    }
  `;
  const StyledContent = styled.div`
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: 10rem auto;
    h2 {
      font-size: 3rem;
      font-family: ${props => props.theme.fonts.primary};
    }
    h3 {
      font-size: 2rem;
      font-family: ${props => props.theme.fonts.primary};
    }
    p {
      font-size: 1.5rem;
      font-family: ${props => props.theme.fonts.secondary};
      color: #828282;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        font-size: 1.5rem;
        font-family: ${props => props.theme.fonts.secondary};
        color: #828282;
        margin-bottom: 2rem;
      }
    }
  `;
  return (
    <Layout>
      <SEO title={title} />
      <StyledHeader>
        <div className="content">
          <h1>{title}</h1>
        </div>
      </StyledHeader>
      <StyledMenu>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/distributors/alexandria"
          >
            Alexandria
          </Link>
        </li>
        <li>
          <Link activeClassName="active-kryton-page" to="/distributors/cairo">
            Cairo Distributors
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/distributors/beni-suef"
          >
            Beni Suef Distributors
          </Link>
        </li>
        <li>
          <Link activeClassName="active-kryton-page" to="/distributors/tanta">
            Tanta Distributors
          </Link>
        </li>
        <li>
          <Link activeClassName="active-kryton-page" to="/contact-us">
            Become Distributor?
          </Link>
        </li>
      </StyledMenu>
      <StyledContent>{children}</StyledContent>
    </Layout>
  );
};

export default DistributorPage;
