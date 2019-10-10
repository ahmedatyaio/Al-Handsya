import { graphql, Link } from 'gatsby';
import BackgroundImg from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from '../../components/CallToAction';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const GeneralConstruction = ({ data }) => {
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
      <SEO title="General Construction Division" />
      <StyledHeader>
        <BackgroundImg
          fluid={data.headerImg.childImageSharp.fluid}
          Tag="div"
          className="background"
          backgroundColor={`#fdd835`}
        >
          <div className="head">
            <h1>General Construction Division</h1>
          </div>
        </BackgroundImg>
      </StyledHeader>
      <StyledSectionContent>
        <div className="content">
          <p>
            This was the starting division of the company , the division was
            working in the company's owned real estate projects only. From
            Housing projects ,{' '}
          </p>
          <p>
            villas to residential or commercial multi stories buildings ; our
            construction division is capable of operating & management of mid
            size projects of any genre.
          </p>
          <p>
            Recently, the Construction department is wide open to participate in
            any small to midsize construction project in the market.
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

export default GeneralConstruction;
