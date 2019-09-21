import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImg from 'gatsby-background-image';

import Layout from '../components/layout';
import HeaderCarousel from '../components/HeaderCarousel';
import OurPartners from '../components/OurPartners';

import {
  SeeAll,
  TwoSidedBlock,
  CategoriesPanel,
  SectionHeading,
  OurEquipment,
  OurProjects
} from '../components/styles/index';

const index = ({ data }) => {
  return (
    <Layout>
      <HeaderCarousel />
      <OurPartners allPartners={data.allPartners} />
      <div className="container">
        <TwoSidedBlock mission>
          <div className="block-typography">
            <div className="block-title">
              <h6>What we do</h6>
              <h2>Our Mission</h2>
            </div>
            <div className="block-content">
              <p>
                Backed up with our intense experience & Technical awareness, we
                are always striving to be the best in all the fields we are
                involved into.
              </p>
              <p>
                Although Alhandsya is rather new in the Egyptian market, we have
                succeeded in recruiting lots of highly trained & incomparable
                experienced staff.
              </p>
              <Link to="/">Read More</Link>
            </div>
          </div>
          <div className="block-image">
            <Img fluid={data.missionImg.childImageSharp.fluid} />
          </div>
        </TwoSidedBlock>
        <TwoSidedBlock>
          <div className="block-image">
            <Img fluid={data.teamImg.childImageSharp.fluid} />
          </div>
          <div className="block-typography">
            <div className="block-title">
              <h6>We're experienced</h6>
              <h2>Our Team</h2>
            </div>
            <div className="block-content">
              <p>
                We believe that the good & highly trained team will make any
                company to lead it's market. this is what we have done here!
              </p>
              <p>
                Backed up with several years of experience in all the business
                fields we are involved into, we are proud to have those
                individuals who are always happy to deliver any job required.
              </p>
              <Link to="/">Read More</Link>
            </div>
          </div>
        </TwoSidedBlock>
        <CategoriesPanel>
          <div className="categories-hero">
            <Img fluid={data.categoriesHero.childImageSharp.fluid} />
          </div>
          <div className="categories">
            <div className="content">
              <h4>Welcome to</h4>
              <h2>Al-Handsya</h2>
              <div className="category-blocks">
                <div className="block">
                  <span className="icon-construction"></span>
                  <h3>
                    <Link to="/">General Construction Divison</Link>
                  </h3>
                  <p>
                    This was the starting division of the company , the division
                    was working in the company's owned real estate projects
                    only.
                  </p>
                  <Link to="/" className="more">
                    Read More
                  </Link>
                </div>
                <div className="block">
                  <span className="icon-chemicals"></span>
                  <h3>
                    <Link to="/">
                      Construction Chemicals Distribution Division
                    </Link>
                  </h3>
                  <p>
                    Alhandsya is proud to be the exclusive Agent & the
                    distributor for several international construction materials
                  </p>
                  <Link to="/" className="more">
                    Read More
                  </Link>
                </div>
                <div className="block">
                  <span className="icon-worldwide"></span>
                  <h3>
                    <Link to="/">Execlusive Kryton Products</Link>
                  </h3>
                  <p>
                    This was the starting division of the company , the division
                    was working in the company's owned real estate projects
                    only.
                  </p>
                  <Link to="/" className="more">
                    Read More
                  </Link>
                </div>
                <div className="block">
                  <span className="icon-engineer"></span>
                  <h3>
                    <Link to="/">
                      Specialized Engineering Application Division
                    </Link>
                  </h3>
                  <p>
                    This Division was established to work on the waterproofing
                    projects only, By time we expanded our speciality range
                  </p>
                  <Link to="/" className="more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CategoriesPanel>
      </div>
      <SectionHeading>
        <h2 className="outline">Check out all our</h2>
        <h3>equipment</h3>
      </SectionHeading>
      <OurEquipment>
        <div className="equipment-block">
          <Link to="/">
            <BackgroundImg fluid={data.waterproofImg.childImageSharp.fluid} />
            <h2>Water Proofing Equipment</h2>
          </Link>
        </div>
        <div className="equipment-block">
          <Link to="/">
            <BackgroundImg fluid={data.concreteImg.childImageSharp.fluid} />
            <h2>Concrete repair & Flooring</h2>
          </Link>
        </div>
        <div className="equipment-block">
          <Link to="/">
            <BackgroundImg fluid={data.safetyImg.childImageSharp.fluid} />
            <h2>Safety tools & Work customs</h2>
          </Link>
        </div>
        <div className="equipment-block">
          <Link to="/">
            <BackgroundImg fluid={data.measurementImg.childImageSharp.fluid} />
            <h2>Measurement & Testing tools</h2>
          </Link>
        </div>
      </OurEquipment>
      <SeeAll>
        <Link to="/" className="see-all">
          Check all equipment
        </Link>
      </SeeAll>
      <SectionHeading>
        <h2 className="outline">Check out all our</h2>
        <h3>projects</h3>
      </SectionHeading>
      <OurProjects>
        {data.allProjects.edges.map(project => (
          <div key={project.node.projectName} className="project-block">
            <Link to="/">
              <BackgroundImg fluid={project.node.heroImage.fluid} />
              <h2>{project.node.projectName}</h2>
            </Link>
          </div>
        ))}
      </OurProjects>
      <SeeAll>
        <Link to="/" className="see-all">
          Check all projects
        </Link>
      </SeeAll>
      {/* <ContactUsDetails>
        <div className="background-img">
          <Img fluid={data.contactDetailsImg.childImageSharp.fluid} />
        </div>
        <div className="deets">
          <h2>INFO</h2>
        </div>
      </ContactUsDetails> */}
    </Layout>
  );
};

export const data = graphql`
  {
    missionImg: file(relativePath: { eq: "homepage/mission.png" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamImg: file(relativePath: { eq: "homepage/team.png" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    categoriesHero: file(relativePath: { eq: "homepage/categories.png" }) {
      childImageSharp {
        fluid(maxWidth: 410) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    waterproofImg: file(relativePath: { eq: "homepage/waterproof.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    concreteImg: file(relativePath: { eq: "homepage/concrete.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    safetyImg: file(relativePath: { eq: "homepage/safety-tools.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    measurementImg: file(relativePath: { eq: "homepage/measurement.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    allProjects: allContentfulProjects(limit: 5) {
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
    allPartners: allContentfulPartners(limit: 10) {
      edges {
        node {
          name
          logo {
            title
            fluid(maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    contactDetailsImg: file(
      relativePath: { eq: "homepage/contact-us-details.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default index;
