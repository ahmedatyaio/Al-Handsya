import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';

const WhyKryton = () => {
  const StyledHeader = styled.div`
    background: #333333;
    height: 35vh;
    position: relative;
    h1 {
      position: absolute;
      bottom: 0;
    }
  `;

  return (
    <Layout>
      <StyledHeader>
        <h1>Kryton</h1>
      </StyledHeader>
    </Layout>
  );
};

export default WhyKryton;
