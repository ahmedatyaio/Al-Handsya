import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const CrackRepair = ({ data }) => {
  return (
    <KrytonSystems
      title="Crack Repair Systems"
      photo={data.crack.childImageSharp.fluid}
    />
  );
};

export const data = graphql`
  {
    crack: file(relativePath: { eq: "kryton/crack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default CrackRepair;
