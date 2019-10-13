import { graphql } from 'gatsby';
import React from 'react';
import KrytonPage from '../../components/KrytonPages';

const WhyKryton = ({ data }) => {
  return (
    <KrytonPage
      title="What is Kryton"
      photoOne={data.whatOne.childImageSharp.fluid}
      photoTwo={data.whatTwo.childImageSharp.fluid}
      hasMultipleImages={true}
    />
  );
};

export const data = graphql`
  {
    whatOne: file(relativePath: { eq: "kryton/what1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    whatTwo: file(relativePath: { eq: "kryton/what2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
