import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import BackgroundImg from 'gatsby-background-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CallToAction from '../../components/CallToAction';

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
      <SEO title="Construction Chemicals Distribution Division" />
      <StyledHeader>
        <BackgroundImg
          fluid={data.headerImg.childImageSharp.fluid}
          Tag="div"
          className="background"
          backgroundColor={`#fdd835`}
        >
          <div className="head">
            <h1>Construction Chemicals Distribution Division</h1>
          </div>
        </BackgroundImg>
      </StyledHeader>
      <StyledSectionContent>
        <div className="content">
          <p>
            Alhandsya is proud to be the exclusive Agent & the distributor for
            several international construction materials brands including :
          </p>
          <ul>
            <li>- KRYTON Canada</li>
            <li>- INSUWRAP KSA</li>
            <li>- ALCHIMICA Greece</li>
            <li>- OLIN France</li>
            <li>- DENEEF Belgium</li>
            <li>- ISOMAT Greece</li>
            <li>- Several other brands.</li>
          </ul>
          <p>
            We are working hard to cover all the specialized construction
            materials needed in any project ; We have solutions for any of your
            problems coming from a speciality work or a very high tech material
            to use in your project.
          </p>
          <p>
            From the only permenant hydrophilic crystaline waterproofing
            concrete admixtures & coatings , to polyurethane and hybrid sealants
            , to the most durable swellable water stop bars and rods to the cost
            & time saving injection resins and lots of other speciality products
            that you won't find anywhere else except here.
          </p>
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
