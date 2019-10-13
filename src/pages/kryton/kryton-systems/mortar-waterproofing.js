import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const MortarWaterproofing = ({ data }) => {
  return (
    <KrytonSystems
      title='Mortar Waterproofing Admixtures "KMA"'
      photo={data.kma.childImageSharp.fluid}
    />
  );
};

export const data = graphql`
  {
    kma: file(relativePath: { eq: "kryton/kma.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default MortarWaterproofing;
