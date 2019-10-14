import React from 'react';
import styled from 'styled-components';

const StyledCallToAction = styled.div`
  background: ${props => props.theme.colors.yellow2};
  padding: 1rem;
  font-family: ${props => props.theme.fonts.primary};
  .content {
    width: 90%;
    max-width: ${props => props.theme.responsive.maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 3rem;
      color: white;
    }
    a {
      color: white;
      border: 3px solid#ffffff;
      font-size: 1.8rem;
      padding: 1.5rem 2.5rem;
      transition: 0.5s all ease-in-out;
      &:hover {
        background: #ffffff;
        color: #000000;
      }
    }
    @media (max-width: 460px) {
      flex-direction: column;
      h2 {
        font-size: 3rem;
        margin: 1rem 0;
      }
      a {
        margin: 1rem;
      }
    }
  }
`;

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <div className="content">
        <h2>Like what you see?</h2>
        <a href="mailto:alhandsya@alhandsya.com">Email Us</a>
      </div>
    </StyledCallToAction>
  );
};

export default CallToAction;
