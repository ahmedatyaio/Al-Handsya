import React from 'react';
import styled from 'styled-components';
import CallToAction from '../components/CallToAction';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Careers = () => {
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
        input {
          width: 41%;
          padding: 1.5rem 2rem;
          margin: 1rem 0.8rem;
          font-size: 1.6rem;
          font-family: ${props => props.theme.fonts.secondary};
        }
        textarea {
          width: 100%;
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
          <h1>Careers</h1>
        </div>
      </StyledHeader>
      <StyledContent>
        <div className="form">
          <h2>Job Application Form</h2>
          <form
            action="https://getform.io/f/39c5e132-3d25-4510-b477-eeefa8576d3a"
            method="POST"
          >
            <input required name="name" placeholder="Name" type="text" />
            <input
              required
              name="education"
              placeholder="Education"
              type="text"
            />
            <input
              required
              name="graduation"
              placeholder="Graduation Year"
              type="text"
            />
            <input
              required
              name="dateofbirth"
              placeholder="Date of Birth"
              type="date"
            />
            <input
              required
              name="maritalstatus"
              placeholder="Marital Status"
              type="text"
            />
            <input
              required
              name="militarystatus"
              placeholder="Military Status"
              type="text"
            />
            <input required name="gender" placeholder="Gender" type="text" />
            <input
              required
              name="idnumber"
              placeholder="ID Number"
              type="text"
            />
            <input required name="email" placeholder="Email" type="email" />
            <input required name="address" placeholder="Address" type="text" />
            <input required name="phone" placeholder="Phone" type="number" />
            <input
              required
              name="cellphone"
              placeholder="Cell Phone"
              type="number"
            />
            <input
              required
              name="expectedsalary"
              placeholder="Expected Salary"
              type="number"
            />
            <input
              required
              name="cv"
              placeholder="Upload your C.V"
              type="file"
            />
            <textarea
              rows="6"
              placeholder="Comments & Other informations ( Optional )"
              name="comments"
            ></textarea>
            <button type="submit">Send Application</button>
          </form>
        </div>
        <div className="c">
          <div className="contact-us">
            <h2>Contact Us</h2>
            <h3>Mailing Address</h3>
            <p>
              El Mohandseen Branch (Main Branch) 6 Al Nile Al Abyad St, Lebanon
              Sq, Mohandseen - Giza, Arab Republic of Egypt.
            </p>
            <p>Fax. +20 233027478</p>
            <p>Tel. +20 233027478</p>
          </div>
        </div>
      </StyledContent>
      <CallToAction />
    </Layout>
  );
};

export default Careers;
