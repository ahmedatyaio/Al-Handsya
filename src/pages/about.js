import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';

const PageHeader = styled.div`
  height: 25vh;
  width: 100%;
  .background {
    height: 100%;
    h1 {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-family: ${props => props.theme.fonts.primary};
      font-size: 3rem;
      color: ${props => props.theme.colors.yellow2};
    }
  }
`;

const about = ({ data }) => {
  const imageData = data.aboutImg.childImageSharp.fluid;

  return (
    <Layout>
      <PageHeader>
        <BackgroundImage
          Tag="div"
          fluid={imageData}
          className="background"
          backgroundColor={`#040e18`}
        >
          <h1>About</h1>
        </BackgroundImage>
      </PageHeader>
    </Layout>
  );
};

export const data = graphql`
  {
    aboutImg: file(relativePath: { eq: "about/about-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default about;
