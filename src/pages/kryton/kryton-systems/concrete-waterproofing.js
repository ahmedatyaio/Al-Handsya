import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const ConcreteWaterproofing = ({ data }) => {
  return (
    <KrytonSystems
      title="Concrete Waterproofing Admixtures 'KIM'"
      photo={data.kim.childImageSharp.fluid}
    />
  );
};

export const data = graphql`
  {
    kim: file(relativePath: { eq: "kryton/kim.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default ConcreteWaterproofing;
