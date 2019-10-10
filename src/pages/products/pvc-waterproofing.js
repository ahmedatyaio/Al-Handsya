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
      <SEO title="Insuwrap PVC Waterproofing" />
      <StyledHeader>
        <BackgroundImg
          fluid={data.headerImg.childImageSharp.fluid}
          Tag="div"
          className="background"
          backgroundColor={`#fdd835`}
        >
          <div className="head">
            <h1>Insuwrap PVC Waterproofing</h1>
          </div>
        </BackgroundImg>
      </StyledHeader>
      <StyledSectionContent>
        <div className="content">
          <p>
            Alhandsya is an Approved applicator & Distributor of Insuwrap Pvc
            Waterproofing membranes. INSUWRAP The Waterproofing & Wrapping
            Products Company, manufacturer of PVC waterproofing membranes, is a
            100% Saudi owned company established in 1985. The plant was
            constructed and commissioned using State of Art Technology and
            Know-How from Germany; Since then more than thirty million square
            meters of INSUWRAP PVC membranes were applied in KSA, Gulf States,
            Middle East, Africa and Europe. Over these years INSUWRAP has proven
            reliability in the extreme weather conditions. INSUWRAP high polymer
            waterproofing membranes meet the highest international standards
            (DIN, ASTM & SIA) satisfying all requirements of modern
            waterproofing technology.
          </p>
          <h2>Insuwrap Pvc waterproofing materials Range includes :</h2>
          <ul>
            <li>- Covered Roofing</li>
            <li>- Exposed Roofing</li>
            <li>- Drinking Water Tanks</li>
            <li>- Swimming pools</li>
            <li>- Tanking system & basements waterproofing</li>
            <li>- Tunnel Lining</li>
            <li>- Dams</li>
            <li>- Landscape</li>
          </ul>
          <p>
            Alhandsya is proud to be an approved applicator & distributor for
            INSUWRAP products…
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
