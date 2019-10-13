import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../../components/layout';

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
    margin: 6rem auto;
    justify-content: space-between;
    .systems {
      width: 25%;
      margin: 0;
      padding: 0;
      background: #f7f7f7;
      padding: 3rem 2rem;
      .active-system {
        color: ${props => props.theme.colors.yellow3};
      }
      li {
        margin: 1rem 0;
        font-size: 1.5rem;
        font-family: ${props => props.theme.fonts.secondary};
        border-bottom: 1px solid#dcdcdc;
        padding-bottom: 2rem;
        a {
          color: ${props => props.theme.colors.black};
          &:hover {
            color: ${props => props.theme.colors.yellow3};
          }
        }
      }
    }
    .photo {
      width: 70%;
    }
  `;

  return (
    <Layout>
      <StyledHeader>
        <div className="content">
          <h1>Kryton Systems</h1>
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
        <ul className="systems">
          <li>
            <Link
              to="/kryton/kryton-systems/concrete-waterproofing"
              activeClassName="active-system"
            >
              Concrete Waterproofing Admixtures "KIM"
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/mortar-waterproofing"
              activeClassName="active-system"
            >
              Mortar Waterproofing Admixtures "KMA"
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/waterproofing-coatings"
              activeClassName="active-system"
            >
              Waterproofing Coatings "Krystol T1 & T2"
            </Link>
          </li>
          <li
            to="/kryton/kryton-systems/crack-repair"
            activeClassName="active-system"
          >
            <Link>Crack Repair Systems</Link>
          </li>
          <li>
            <Link>Krystol Waterstop Systems</Link>
          </li>
          <li>
            <Link>Hydrostop Sealer</Link>
          </li>
          <li>
            <Link>Hydrostop Restore & Protect System</Link>
          </li>
        </ul>
        <Img className="photo" fluid={data.crack.childImageSharp.fluid} />
      </StyledWhy>
    </Layout>
  );
};

export const data = graphql`
  {
    crack: file(relativePath: { eq: "kryton/crack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
