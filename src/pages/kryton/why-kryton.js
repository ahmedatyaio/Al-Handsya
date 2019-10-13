import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';

const WhyKryton = ({ data }) => {
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
      }
      ul {
        position: absolute;
        bottom: -2.5rem;
        display: flex;
        padding: 0;
        margin: 0;
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
      }
    }
  `;

  const StyledWhy = styled.div`
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    display: flex;
    margin: 5rem auto;
    .photo {
      width: 50%;
    }
  `;

  return (
    <Layout>
      <StyledHeader>
        <div className="content">
          <h1>Why Kryton</h1>
          <ul>
            <li>
              <Link
                activeClassName="active-kryton-page"
                to="/kryton/why-kryton"
              >
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
          </ul>
        </div>
      </StyledHeader>
      <StyledWhy>
        <Img className="photo" fluid={data.whyOne.childImageSharp.fluid} />
        <Img className="photo" fluid={data.whyTwo.childImageSharp.fluid} />
      </StyledWhy>
    </Layout>
  );
};

export const data = graphql`
  {
    whyOne: file(relativePath: { eq: "kryton/why1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    whyTwo: file(relativePath: { eq: "kryton/why2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
