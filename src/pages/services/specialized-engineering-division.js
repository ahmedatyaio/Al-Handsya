import { graphql, Link } from 'gatsby';
import BackgroundImg from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from '../../components/CallToAction';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const SpecializedEngineering = ({ data }) => {
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
      <SEO title="Specialized Engineering Application Division" />
      <StyledHeader>
        <BackgroundImg
          fluid={data.headerImg.childImageSharp.fluid}
          Tag="div"
          className="background"
          backgroundColor={`#fdd835`}
        >
          <div className="head">
            <h1>Specialized Engineering Application Division</h1>
          </div>
        </BackgroundImg>
      </StyledHeader>
      <StyledSectionContent>
        <div className="content">
          <p>
            This Division was established to work on the waterproofing projects
            only, By time we expanded our speciality range to include the
            concrete repair work, structural strengthening using the newest
            technologies in the world, carbon fiber installation.
          </p>
          <p>
            also we have included the industrial flooring works ( screeding of
            low tolerance floors , epoxy & cement based coating for floors…etc).
          </p>
          <p>Our last but not least addition was the Stamped concrete work.</p>
        </div>
        <PrevAndNextService>
          <Link className="prev" to="/services//general-construction-division">
            Previous Service
          </Link>
          <Link className="next" to="/services/construction-chemicals">
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
      relativePath: { eq: "services/specialized-engineering.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default SpecializedEngineering;
