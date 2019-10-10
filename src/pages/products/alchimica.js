import { graphql, Link } from 'gatsby';
import BackgroundImg from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from '../../components/CallToAction';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ConstructionChemicals = ({ data }) => {
  const StyledHeader = styled.div`
    width: 100%;
    height: 40vh;
    .head {
      margin: auto;
      width: 100%;
      max-width: ${props => props.theme.responsive.maxWidth};
    }
    h1 {
      font-size: 2.5rem;
      font-family: ${props => props.theme.fonts.primary};
      text-align: center;
      color: white;
      position: absolute;
      bottom: 0;
      background: ${props => props.theme.colors.yellow2};
      padding: 2rem;
    }
    .gatsby-image-wrapper {
      height: 100%;
    }

    @media (max-width: 460px) {
      height: 30vh;
      .head h1 {
        font-size: 1.8rem;
        margin: 0;
      }
    }
  `;

  const StyledSectionContent = styled.div`
    width: 90%;
    max-width: ${props => props.theme.responsive.maxWidth};
    margin: auto auto 5rem;
    .content {
      margin: 5rem 0;
      p {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 1.7rem;
        line-height: 3.5rem;
        color: #333333;
        @media (max-width: 460px) {
          font-size: 1.5rem;
        }
      }
      h2 {
        font-size: 2rem;
        font-family: ${props => props.theme.fonts.primary};
      }
      ul {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        font-family: ${props => props.theme.fonts.secondary};
        line-height: 4rem;
        color: #333333;
      }
      a {
        font-size: 2rem;
        margin-top: 2rem;
        display: inline-block;
        font-family: ${props => props.theme.fonts.secondary};
        color: ${props => props.theme.colors.black};
        text-decoration: underline;
      }
    }
  `;

  const PrevAndNextService = styled.div`
    display: flex;
    justify-content: space-between;
    a {
      font-size: 1.6rem;
      font-family: ${props => props.theme.fonts.primary};
      padding: 2rem 3rem;
      transition: 0.5s padding;
      &:hover {
        padding: 2rem 5rem;
      }
      @media (max-width: 375px) {
        padding: 1.8rem;
      }
    }
    .prev {
      color: #000000;
      border: 2px solid#000000;
      font-size: 1.5rem;
    }
    .next {
      background: ${props => props.theme.colors.yellow2};
      color: white;
      border: 2px solid ${props => props.theme.colors.yellow2};
    }
  `;

  return (
    <Layout>
      <SEO title="Alchimica ( Sealants & Adhesives )" />
      <StyledHeader>
        <BackgroundImg
          fluid={data.headerImg.childImageSharp.fluid}
          Tag="div"
          className="background"
          backgroundColor={`#fdd835`}
        >
          <div className="head">
            <h1>Alchimica ( Sealants & Adhesives )</h1>
          </div>
        </BackgroundImg>
      </StyledHeader>
      <StyledSectionContent>
        <div className="content">
          <p>
            ALCHIMICA is a dynamic company specialized in the development and
            production of specialty polyurethane materials for construction and
            industrial applications. For over 25 years, ALCHIMICA has
            successfully provided products and services to architects,
            engineers, home builders, contractors and building owners worldwide.
          </p>
          <p>
            Alchimica's "1 and 2" part polyurethane systems have a proven track
            record of high performance in numerous prestigious construction
            works around the world.
          </p>
          <p>
            In addition, our industrial spray coatings are trusted as industrial
            waterproofing and insulating solutions, even in the most demanding
            of cases, e.g. construction of health-sensitive water drinking
            reservoirs, restoration of aged buildings and waterproofing of
            bridge platforms.
          </p>
          <p>
            In recent years the company has substantially increased the product
            portfolio to include industrial products as well as non-polyurethane
            based technologies .
          </p>
          <p>
            ALCHIMICA is a company with a strong tradition in innovation,
            investing heavily in research and development and constantly
            striving for new levels of excellence.
          </p>
          <p>
            Alhandsya is proud to be the distributor for ALCHIMICA products…
          </p>
          <Link to="/contact">Contact us for more info</Link>
        </div>
        <PrevAndNextService>
          <Link className="prev" to="/">
            Previous Service
          </Link>
          <Link className="next" to="/">
            Next Service
          </Link>
        </PrevAndNextService>
      </StyledSectionContent>
      <CallToAction />
    </Layout>
  );
};

export const data = graphql`
  {
    headerImg: file(relativePath: { eq: "services/services-header-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default ConstructionChemicals;
