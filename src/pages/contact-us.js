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
  const StyledContact = styled.div`
    position: relative;
    padding: 0;
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: -3rem auto 5rem;
    .row {
      display: flex;
      margin-bottom: 1.5rem;
      .contact-box {
        background: #ffffff;
        box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
        padding: 2rem 3rem;
        border-left: 4px solid ${props => props.theme.colors.yellow};
        margin-right: 1rem;
        ul {
          margin: 0;
          padding: 0;
          li {
            h3 {
              font-family: ${props => props.theme.fonts.primary};
              font-size: 2rem;
            }
            h4 {
              font-family: ${props => props.theme.fonts.primary};
              font-size: 1.6rem;
            }
            p {
              font-family: ${props => props.theme.fonts.secondary};
              font-size: 1.4rem;
              color: #333333;
            }
          }
        }
      }
      .contact-box-one {
        width: 60%;
      }
      .contact-box-two {
        width: 40%;
      }
      .contact-box-three {
        width: 45%;
      }
      .contact-box-four {
        width: 55%;
      }
    }

    @media (max-width: 450px) {
      .row {
        flex-wrap: wrap;
      }
      .contact-box {
        margin-bottom: 2rem;
      }
      .row .contact-box-one,
      .row .contact-box-two,
      .row .contact-box-three,
      .row .contact-box-four {
        width: 100%;
      }
    }
  `;
  return (
    <Layout>
      <SEO title="Contact Us" />
      <StyledHeader>
        <div className="content">
          <h1>Contact Us</h1>
        </div>
      </StyledHeader>
      <StyledContact>
        <div className="row">
          <div className="contact-box contact-box-one">
            <ul>
              <li>
                <h3>Mailing Address (Head Office)</h3>
                <p>
                  6 Al Nile Al Abyad St, Lebanon Sq, Mohandseen - Giza, Arab
                  Republic of Egypt.
                </p>
              </li>
              <li>
                <h3>Telephone</h3>
                <p>+20 233027478 or +20 233046649</p>
              </li>
              <li>
                <h3>Fax</h3>
                <p>+20 233027478 or +20 233046649</p>
              </li>
            </ul>
          </div>
          <div className="contact-box contact-box-two">
            <ul>
              <li>
                <h3>Mailing Address (Branch office)</h3>
                <p>
                  2 A Hasab El Nabi St – Faisal Street - Giza, Arab Republic of
                  Egypt.
                </p>
              </li>
              <li>
                <h3>Telephone</h3>
                <p>+20 235864982</p>
              </li>
              <li>
                <h3>Fax</h3>
                <p>+20 235864982</p>
              </li>
              <li>
                <h3>Email</h3>{' '}
                <p>
                  <a href="mailto:alhandsya@alhandsya.com">
                    Mail: alhandsya@alhandsya.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="contact-box contact-box-three">
            <ul>
              <li>
                <h4>Eng. Mohamed Fawzy (Executive Manager)</h4>
                <p>
                  <a href="mailto:m.fawzy@alhandsya.com">
                    Mail: m.fawzy@alhandsya.com
                  </a>
                </p>
              </li>
              <li>
                <h4>Eng. Mahmoud Mostafa (Area Sales Manager)</h4>
                <p>
                  <a href="mailto:alhandsya@alhandsya.com">
                    Mail: alhandsya@alhandsya.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="contact-box contact-box-four">
            <ul>
              <li>
                <h4>Eng. Mohamed Ibrahiem Safi eldien (General Manager)</h4>
                <p>
                  <a href="mailto:m.ibrahim@alhandsya.com">
                    Mail: m.ibrahim@alhandsya.com
                  </a>
                </p>
              </li>
              <li>
                <h4>Eng. Islam Safie Eldien (Financial & Admin manager)</h4>
                <p>
                  <a href="mailto:alhandsya@alhandsya.com">
                    Mail: alhandsya@alhandsya.com
                  </a>
                </p>
              </li>
              <li>
                <h4>Mr. Mohamed Hassan (HR. & Admin Coordinator))</h4>
                <p>
                  <a href="mailto:alhandsya@alhandsya.com">
                    Mail: alhandsya@alhandsya.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </StyledContact>
      <CallToAction />
    </Layout>
  );
};

export default DistributorPage;
