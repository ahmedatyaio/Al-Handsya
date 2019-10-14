import React from 'react';
import styled from 'styled-components';
import CallToAction from '../components/CallToAction';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DistributorPage = ({ children, title }) => {
  const StyledHeader = styled.div`
    height: 20vh;
    position: relative;
    background: #f7f7f7;
    .content {
      max-width: ${props => props.theme.responsive.maxWidth};
      width: 90%;
      margin: 0 auto;
      h1 {
        position: absolute;
        bottom: 3rem;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 4rem;
        @media (max-width: 450px) {
          font-size: 3rem;
          width: 90%;
        }
      }
    }
  `;
  const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0;
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: -3rem auto 5rem;
    .form {
      width: 68%;
      box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
      background: #ffffff;
      h2 {
        padding: 3rem 3rem 0;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 1.8rem;
      }
      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 2rem;
        input,
        textarea {
          width: 41%;
          padding: 1.5rem 2rem;
          margin: 1rem 0.8rem;
          font-size: 1.6rem;
          font-family: ${props => props.theme.fonts.secondary};
        }
        button {
          background: ${props => props.theme.colors.yellow2};
          padding: 2rem 4rem;
          border: 0;
          font-size: 1.5rem;
          margin: 1rem;
          font-family: ${props => props.theme.fonts.primary};
          cursor: pointer;
        }
      }
    }
    .c {
      width: 31%;
      .contact-us {
        width: 100%;
        box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
        background: #ffffff;
        padding: 1rem 0;
        font-family: ${props => props.theme.fonts.secondary};
        h2 {
          font-size: 1.8rem;
          padding: 2rem 2rem 0;
          margin: 2rem 0 0;
        }
        h3 {
          padding: 0 2rem;
          color: ${props => props.theme.colors.yellow3};
          font-size: 2.8rem;
          margin: 0;
          font-family: ${props => props.theme.fonts.primary};
        }
        p {
          padding: 0 2rem;
          margin-top: 2rem;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
      }
    }
    @media (max-width: 1150px) {
      .form form input,
      textarea {
        padding: 1.5rem;
      }
    }
    @media (max-width: 834px) {
      .form form input,
      textarea {
        width: 39%;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .form {
        width: 100%;
        margin-bottom: 5rem;
        form input,
        textarea {
          width: 42%;
        }
      }
      .c {
        width: 100%;
        p {
          width: 80%;
        }
      }
    }
    @media (max-width: 450px) {
      .form form input,
      textarea {
        width: 100%;
      }
    }
  `;
  return (
    <Layout>
      <SEO title="Careers" />
      <StyledHeader>
        <div className="content">
          <h1>Contact Us</h1>
        </div>
      </StyledHeader>
      <StyledContent>
        <h2>atasf</h2>
      </StyledContent>
      <CallToAction />
    </Layout>
  );
};

export default DistributorPage;
