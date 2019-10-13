import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const HydroSealer = ({ data }) => {
  return (
    <KrytonSystems
      title="Hydrostop Sealer"
      photo={data.hydrostop.childImageSharp.fluid}
    />
  );
};

export const data = graphql`
  {
    hydrostop: file(relativePath: { eq: "kryton/hydrostop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default HydroSealer;
