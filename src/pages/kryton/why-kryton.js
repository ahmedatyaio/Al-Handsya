import { graphql } from 'gatsby';
import React from 'react';
import KrytonPage from '../../components/KrytonPages';

const WhyKryton = ({ data }) => {
  return (
    <KrytonPage
      title="Why Kryton"
      photoOne={data.whyOne.childImageSharp.fluid}
      photoTwo={data.whyTwo.childImageSharp.fluid}
      hasMultipleImages={true}
    />
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
