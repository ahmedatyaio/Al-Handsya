import { graphql } from 'gatsby';
import React from 'react';
import KrytonPage from '../../components/KrytonPages';

const WhyKryton = ({ data }) => {
  return (
    <KrytonPage
      photoOne={data.where.childImageSharp.fluid}
      title="Where to use Kryton"
    />
  );
};

export const data = graphql`
  {
    where: file(relativePath: { eq: "kryton/where.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1150) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
