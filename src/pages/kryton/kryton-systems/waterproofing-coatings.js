import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const WhyKryton = ({ data }) => {
  return <KrytonSystems photo={data.tt.childImageSharp.fluid} />;
};

export const data = graphql`
  {
    tt: file(relativePath: { eq: "kryton/tt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
