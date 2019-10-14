import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import CallToAction from '../components/CallToAction';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PageHeader = styled.div`
  height: 35vh;
  width: 100%;
  display: block;
  .background {
    height: 100%;
    h1 {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-family: ${props => props.theme.fonts.primary};
      font-size: 3rem;
      color: ${props => props.theme.colors.yellow2};
    }
  }
`;

const AboutSections = styled.div`
  width: 85%;
  max-width: 768px;
  margin: 10rem auto;
  h2 {
    font-size: 4rem;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.yellow2};
  }
  p {
    font-family: ${props => props.theme.fonts.secondary};
    color: #717171;
    font-size: 1.6rem;
    margin-bottom: 3rem;
    line-height: 2.5rem;
  }
  @media (max-width: 460px) {
    margin: 4rem auto;
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 2.5rem;
    }
  }
`;

const about = ({ data }) => {
  const imageData = data.aboutImg.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="About" />
      <PageHeader>
        <BackgroundImage
          Tag="div"
          fluid={imageData}
          className="background"
          backgroundColor={`#fdd835`}
        >
          <h1>About</h1>
        </BackgroundImage>
      </PageHeader>
      <AboutSections id="our-mission">
        <h2>Our Mission</h2>
        <p>
          Backed up with our intense experience & Technical awareness, we are
          always striving to be the best in all the fields we are involved into.
        </p>
        <p>
          Although Alhandsya is rather new in the Egyptian market, we have
          succeeded in recruiting lots of highly trained & incomparable
          experienced staff. that gives us all the credibility & trust with our
          clients.
        </p>
        <p>
          Our target is not to grow fast but to grow right; we are and will
          always be committed to provide the highest standards and best
          qualities to our clients.
        </p>
        <p>
          we vow to prolong earning the trust of our clients through our loyalty
          and service durability. We promise to push the limits of technology
          while continuing conducting business the old fashion way. We are
          committed to providing services at the highest of standards in the
          engineering world through our dedicated, experienced and innovative
          teams.
        </p>
        <p>
          We can & we will always do it, no matter how challenging the job was.
        </p>
      </AboutSections>
      <AboutSections id="our-team">
        <h2>Our Team</h2>
        <p>
          We believe that the good & highly trained team will make any company
          to lead it's market…..this is what we have done here ! Backed up with
          several years of experience in all the business fields we are involved
          into, we are proud to have those individuals who are always happy to
          deliver any job required. The company is divided to 3 main divisions
          with a separated team to every division. Our main divisions are :
        </p>
        <p>
          1- General Construction Division: this was the starting division of
          the company , the division was working in the company's owned real
          estate projects only. From Housing projects , villas to resedntial or
          commercial multi stories buildings ; our construction division is
          capable of operating & management of mid size projects of any genre.
          Recently, the Construction department is wide open to participate in
          any small to midsize construction project in the market.
        </p>
        <p>
          2- Specialized Engineering Application division: This Team was
          established to work on the waterproofing projects only ; after some
          time we expanded our speciality range to include the concrete repair
          work, structural strengthening using the newest technologies in the
          world , carbon fiber installation, also we have included the
          industrial flooring works ( screeding of low tolerance floors , epoxy
          & cement based coating for floors…etc) Our last but not least addition
          was the Stamped concrete work.
        </p>
        <p>
          3- Construction chemicals distribution Division: Alhandsya is proud to
          be the exclusive Agent & the distributor for several international
          construction materials brands including : - KRYTON Canada - INSUWRAP
          KSA - ALCHIMICA Greece - OLIN France - DENEEF Belgium - ISOMAT Greece
          - Several other brands. We are working hard to cover all the
          specialized construction materials needed in any project ; We have
          solutions for any of your problems coming from a speciality work or a
          very high tech material to use in your project. From the only
          permenant hydrophilic crystaline waterproofing concrete admixtures &
          coatings , to polyurethane and hybrid sealants , to the most durable
          swellable water stop bars and rods to the cost & time saving injection
          resins and lots of other speciality products that you won't find
          anywhere else except here. Our sales team is always happy to serve you
          anytime..call them now.
        </p>
        <p>
          Managerial & Technological Skills Our Management, Engineers, Skilled
          Technicians, Applicators and Administrative staffare trained and kept
          up-to-date in the latest technology. We know this will be of a great
          benefit to our clients, personnel and the company at large. On-going
          education is required for all personnel. We monitor and observe the
          latest products, tools, equipment, and materials to select the most
          suitable and useful ones for our clients and market. Experience and
          Knowledge acquired are important; however the newer generation of
          systems is far more important. Staying on top of technology and change
          is the challenge. We at Alhandsya have gained both the experience,
          knowledge and the updated technology in Building Science. Our
          professional expertise has technical information on the evaluation,
          performance, maintenance, and durability of materials and systems to
          help you make the right decisions for your projects – new or existing.
        </p>
      </AboutSections>
      <CallToAction />
    </Layout>
  );
};

export const data = graphql`
  {
    aboutImg: file(relativePath: { eq: "about/about-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default about;
