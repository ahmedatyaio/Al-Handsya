import { graphql } from 'gatsby';
import React from 'react';
import KrytonSystems from '../../../components/KrytonSystems';

const HydrostopRestore = ({ data }) => {
  return <KrytonSystems photo={data.restore.childImageSharp.fluid} />;
};

export const data = graphql`
  {
    restore: file(relativePath: { eq: "kryton/restore.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default HydrostopRestore;
