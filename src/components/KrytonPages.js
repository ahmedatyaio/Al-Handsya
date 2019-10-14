import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from './CallToAction';
import Layout from './layout';
import SEO from './seo';

const KrytonSystems = ({ photoOne, photoTwo, title, hasMultipleImages }) => {
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

  const StyledWhy = styled.div`
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    display: flex;
    margin: 5rem auto;
    .photo {
      width: ${hasMultipleImages ? '50%' : '100%'};
    }
    @media (max-width: 450px) {
      flex-wrap: wrap;
      .photo {
        width: 100%;
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
          <Link activeClassName="active-kryton-page" to="/kryton/why-kryton">
            Why Kryton
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/kryton/what-is-kryton"
          >
            What is Kryton
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/kryton/where-to-use-kryton"
          >
            Where to use Kryton
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/kryton/kryton-systems/concrete-waterproofing"
          >
            Kryton Systems
          </Link>
        </li>
      </StyledMenu>
      <StyledWhy>
        <Img className="photo" fluid={photoOne} />
        {hasMultipleImages && <Img className="photo" fluid={photoTwo} />}
      </StyledWhy>
      <CallToAction />
    </Layout>
  );
};

export default KrytonSystems;
