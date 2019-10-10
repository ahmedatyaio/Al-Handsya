import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from '../components/CallToAction';
import Layout from '../components/layout';

const projects = ({ data }) => {
  const StyledHeader = styled.div`
    height: 30vh;
    .gatsby-image-wrapper {
      height: 100%;
    }
  `;

  const StyledIntroHeading = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: 2rem auto;
    h1 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 3.5rem;
      width: 35%;
      color: ${props => props.theme.colors.black};
    }
    p {
      font-size: 1.8rem;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 3rem;
      width: 65%;
      color: #9e9e9e;
    }
  `;

  const StyledProjcets = styled.div`
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: 5rem auto;
    .filters {
      margin: 0;
      padding: 0;
      display: flex;
      li {
        border: 1px solid #333333;
        margin-right: 1rem;
        padding: 1.5rem 2.5rem;
        font-size: 1.8rem;
        font-family: ${props => props.theme.fonts.secondary};
        button {
          color: #333333;
          border: 0;
          background: transparent;
          cursor: pointer;
        }
      }
    }
    .projects {
      display: flex;
      flex-wrap: wrap;
      margin-top: 4rem;
      justify-content: space-between;
      .project {
        width: 32.6%;
        margin-bottom: 6rem;
        height: 26rem;
        .gatsby-image-wrapper {
          height: 100%;
        }
        a {
          color: ${props => props.theme.colors.black};
          font-family: ${props => props.theme.fonts.secondary};
          font-size: 2rem;
        }
      }
    }
  `;
  return (
    <Layout>
      <StyledHeader>
        <Img fluid={data.headerImg.childImageSharp.fluid} />
      </StyledHeader>
      <StyledIntroHeading>
        <h1>Our Projects</h1>
        <p>
          We are committed to delivering high-quality projects that present
          innovative design solutions and excellent value through careful
          control of cost and programme that ensure client satisfaction.
        </p>
      </StyledIntroHeading>
      <StyledProjcets>
        <ul className="filters">
          <li>
            <button href="#">All</button>
          </li>
          <li>
            <button href="#">General</button>
          </li>
          <li>
            <button href="#">Special</button>
          </li>
        </ul>
        <div className="projects">
          {data.allProjects.edges.map(project => (
            <div key={project.node.projectName} className="project">
              <Img fluid={project.node.heroImage.fluid} />
              <h2>
                <Link to="/">{project.node.projectName}</Link>
              </h2>
            </div>
          ))}
        </div>
      </StyledProjcets>
      <CallToAction />
    </Layout>
  );
};

export const data = graphql`
  {
    headerImg: file(relativePath: { eq: "services/services-header-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    allProjects: allContentfulProjects(
      limit: 6
      sort: { order: DESC, fields: [createdAt] }
    ) {
      edges {
        node {
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          projectType
          projectName
          createdAt
        }
      }
    }
  }
`;

export default projects;
