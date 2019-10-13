import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const WhyKryton = ({ data }) => {
  return (
    <KrytonSystems
      title="Krystol Waterstop Systems"
      photo={data.krystol1.childImageSharp.fluid}
    />
  );
};

export const data = graphql`
  {
    krystol1: file(relativePath: { eq: "kryton/krystol1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
