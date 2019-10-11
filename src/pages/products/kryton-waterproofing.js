import { graphql, Link } from 'gatsby';
import BackgroundImg from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from '../../components/CallToAction';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const KrytonWaterproofing = ({ data }) => {
  const StyledHeader = styled.div`
    width: 100%;
    height: 35vh;
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
        line-height: 2.5rem;
        color: #333333;
        @media (max-width: 460px) {
          font-size: 1.5rem;
        }
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
        margin-top: 3rem;
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
      <SEO title="Kryton Waterproofing" />
      <StyledHeader>
        <BackgroundImg
          fluid={data.headerImg.childImageSharp.fluid}
          Tag="div"
          className="background"
          backgroundColor={`#fdd835`}
        >
          <div className="head">
            <h1>Kryton Waterproofing</h1>
          </div>
        </BackgroundImg>
      </StyledHeader>
      <StyledSectionContent>
        <div className="content">
          <p>
            Alhandsya is proud to be the exclusive Distributor for KRYTON®
            Waterproofing products in Egypt. KRYTON Materials Range include :
          </p>
          <ul>
            <li>- KIM waterproofing admixture for Concrete</li>
            <li>- KMA waterproofing admixture for Mortar</li>
            <li>
              - KRYSTOL T1 & T2 Waterproofing coating system for all kinds of
              waterproofing applications on concrete.
            </li>
            <li>- Crack repair system.</li>
            <li>- Waterstop Treatment system.</li>
          </ul>

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
    headerImg: file(
      relativePath: { eq: "products/kryton-waterproofing-header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default KrytonWaterproofing;
