import styled from 'styled-components';

export const TwoSidedBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  .block-typography {
    width: 40%;
  }
  .block-image {
    width: 55%;
  }
  .block-title {
    h6 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.9rem;
      font-weight: 600;
      font-family: ${props => props.theme.fonts.secondary};
      color: #dbdada;
    }
    h2 {
      margin: 0 0 2rem 0;
      color: ${props => props.theme.colors.yellow2};
      font-size: 4rem;
      font-family: ${props => props.theme.fonts.primary};
    }
  }
  .block-content {
    color: #c8c8c8;
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 600;
    font-size: 1.6rem;
    p {
      line-height: 2.5rem;
      margin-top: 0;
    }
    a {
      display: inline-block;
      margin-top: 1rem;
      border-radius: 3rem;
      padding: 1.6rem 5rem;
      color: #ffffff;
      text-decoration: none;
      font-family: ${props => props.theme.fonts.secondary};
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      background: rgb(255, 235, 59);
      background: -moz-linear-gradient(
        90deg,
        rgba(255, 235, 59, 1) 0%,
        rgba(249, 168, 37, 1) 50%,
        rgba(249, 168, 37, 1) 100%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(255, 235, 59, 1) 0%,
        rgba(249, 168, 37, 1) 50%,
        rgba(249, 168, 37, 1) 100%
      );
      background: linear-gradient(
        90deg,
        rgba(255, 235, 59, 1) 0%,
        rgba(249, 168, 37, 1) 50%,
        rgba(249, 168, 37, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffeb3b",endColorstr="#f9a825",GradientType=1);
      &:hover {
        background: rgb(255, 235, 59);
        background: -moz-linear-gradient(
          320deg,
          rgba(255, 235, 59, 1) 0%,
          rgba(249, 168, 37, 1) 50%,
          rgba(249, 168, 37, 1) 100%
        );
        background: -webkit-linear-gradient(
          320deg,
          rgba(255, 235, 59, 1) 0%,
          rgba(249, 168, 37, 1) 50%,
          rgba(249, 168, 37, 1) 100%
        );
        background: linear-gradient(
          320deg,
          rgba(255, 235, 59, 1) 0%,
          rgba(249, 168, 37, 1) 50%,
          rgba(249, 168, 37, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffeb3b",endColorstr="#f9a825",GradientType=1);
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: ${props => (props.mission ? 'column-reverse' : 'column')};
    margin-top: ${props => (props.mission ? '0' : '4rem')};
    .block-typography {
      width: 95%;
    }
    .block-image {
      width: 95%;
      margin: 5rem 0 3rem;
    }
  }
`;

export const CategoriesPanel = styled.div`
  margin-top: 10rem;
  display: flex;
  width: 100%;
  margin: 10rem auto 0;
  .categories-hero {
    width: 35%;
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
  .categories {
    width: 65%;
    .content {
      padding: 0 2rem;
      h4 {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 2rem;
        color: ${props => props.theme.colors.black};
        margin: 0;
        margin-left: 1rem;
      }
      h2 {
        font-size: 4rem;
        font-family: ${props => props.theme.fonts.primary};
        letter-spacing: 0.2rem;
        margin: 0;
        color: ${props => props.theme.colors.yellow2};
        margin-left: 1rem;
      }
      .category-blocks {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .block {
          width: 43%;
          margin-top: 3rem;
          padding: 2rem;
          span {
            color: ${props => props.theme.colors.yellow2};
            font-size: 4rem;
          }
          h3 {
            line-height: 2.5rem;
            font-size: 1.6rem;
            width: 90%;
            font-family: ${props => props.theme.fonts.primary};
            a {
              color: ${props => props.theme.colors.black};
            }
          }
          p {
            color: #acacac;
            font-size: 1.5rem;
            line-height: 2rem;
            font-family: ${props => props.theme.fonts.secondary};
          }
          .more {
            font-size: 1.4rem;
            font-family: ${props => props.theme.fonts.primary};
            color: #7d7d7d;
            &:hover {
              color: ${props => props.theme.colors.yellow2};
            }
          }
          &:hover {
            box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
          }
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    .categories-hero {
      width: 100%;
    }
    .categories {
      width: 100%;
      margin-top: 3rem;
      .content {
        padding: 0;
        h4,
        h2 {
          padding: 0 1rem;
        }
        .category-blocks {
          .block {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const SectionHeading = styled.div`
  width: ${props => props.theme.responsive.maxWidth};
  margin: 10rem auto 5rem;
  font-family: ${props => props.theme.fonts.primary};
  max-width: 100%;
  h2 {
    color: white;
    position: relative;
    width: 35%;
    text-align: center;
    margin: 0;
    z-index: 10;
    &:before {
      content: '';
      position: absolute;
      background: ${props => props.theme.colors.yellow3};
      width: 100%;
      height: 3rem;
      top: 50%;
      left: 0;
      z-index: -1;
    }
  }
  .outline {
    color: white;
    font-size: 4rem;
    text-shadow: -1px -1px 0 ${props => props.theme.colors.yellow3},
      1px -1px 0 ${props => props.theme.colors.yellow3},
      -1px 1px 0 ${props => props.theme.colors.yellow3},
      1px 1px 0 ${props => props.theme.colors.yellow3};
  }

  @supports (
    (text-stroke: 2px ${props => props.theme.colors.yellow3}) or
      (-webkit-text-stroke: 2px ${props => props.theme.colors.yellow3})
  ) {
    .outline {
      color: white;
      -webkit-text-stroke: 2px ${props => props.theme.colors.yellow3};
      text-stroke: 2px ${props => props.theme.colors.yellow3};
      text-shadow: none;
    }
  }
  h3 {
    color: ${props => props.theme.colors.yellow3};
    font-size: 4rem;
    margin-top: 1rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 3rem;
    .outline {
      width: 90%;
      margin: 0 auto;
      font-size: 3.5rem;
    }
    h3 {
      text-align: center;
    }
  }
`;

export const OurEquipment = styled.div`
  width: ${props => props.theme.responsive.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .equipment-block {
    width: 24.5%;
    background: #000000;
    position: relative;
    height: 20rem;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      transition: background 1s ease-out;
      background: rgb(255, 255, 255);
      background: -moz-linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
    }
    .gatsby-image-wrapper {
      height: 100%;
    }
    h2 {
      bottom: 1.5rem;
      position: absolute;
      text-align: center;
      width: 100%;
      color: #ffffff;
      font-family: ${props => props.theme.fonts.primary};
      z-index: 10;
      font-size: 1.6rem;
      line-height: 2.5rem;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: start;
    overflow-x: auto;
    overflow-y: hidden;
    width: 95%;
    .equipment-block {
      width: 85%;
      flex: 0 0 auto;
      margin-right: 0.6rem;
    }
  }
`;

export const OurProjects = styled.div`
  width: ${props => props.theme.responsive.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .project-block {
    background: #333333;
    margin-top: 1.5rem;
    height: 30rem;
    display: block;
    position: relative;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      transition: background 1s ease-out;
      background: rgb(255, 255, 255);
      background: -moz-linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
    }
    &:hover {
      &:after {
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 1) 90%
        );
        background: -webkit-linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 1) 90%
        );
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 1) 90%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
      }
    }
    .gatsby-image-wrapper {
      height: 100%;
    }
    &:nth-child(1) {
      width: 25%;
    }
    &:nth-child(2) {
      width: 48%;
    }
    &:nth-child(3) {
      width: 25%;
    }
    &:nth-child(4) {
      width: 55%;
      height: 35rem;
    }
    &:nth-child(5) {
      width: 44%;
      height: 35rem;
    }
    h2 {
      font-family: ${props => props.theme.fonts.secondary};
      color: white;
      position: relative;
      z-index: 10;
      bottom: 8rem;
      font-size: 2rem;
      margin-left: 2rem;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: start;
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    width: 95%;
    .project-block {
      width: 85% !important;
      flex: 0 0 auto;
      margin-right: 0.6rem;
      height: 25rem;
      &:nth-child(4),
      &:nth-child(5) {
        height: 25rem;
      }
    }
  }
`;

export const SeeAll = styled.div`
  max-width: ${props => props.theme.responsive.maxWidth};
  margin: 4rem auto 0;
  .see-all {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.5rem;
    color: ${props => props.theme.colors.black};
    border-radius: 2rem;
    border: 2px solid ${props => props.theme.colors.yellow};
    padding: 1.2rem 4rem;
    @media (min-width: 320px) and (max-width: 480px) {
      margin-left: 2rem;
    }
  }
`;

export const ContactUsDetails = styled.div`
  height: 70vh;
  margin-top: 10rem;
  position: relative;
  .background-img {
    height: 100%;
    width: 100%;
    .gatsby-image-wrapper {
      height: 100%;
      picture {
        img {
          object-position: top !important;
        }
      }
    }
  }
  .deets {
    position: absolute;
    top: 20%;
    right: 0;
    background: ${props => props.theme.colors.yellow2};
    width: 50%;
    margin-right: 2.5rem;
    height: 60%;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80%;
      height: 100%;
      margin: auto;
      color: white;
      p {
        margin-bottom: 0;
        font-size: 2rem;
        font-family: ${props => props.theme.fonts.secondary};
      }
      h2 {
        margin-top: 0;
        margin-bottom: 0.8rem;
        font-size: 4rem;
        font-family: ${props => props.theme.fonts.primary};
      }
      .contact {
        display: flex;
        align-items: center;
        font-family: ${props => props.theme.fonts.secondary};
        color: #333333;
        span {
          font-size: 4rem;
          color: #222222;
        }
        h3 {
          margin-left: 1rem;
          font-size: 1.6rem;
          width: 80%;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
    height: 45vh;
    .background-img {
      display: none;
    }
    .deets {
      margin-right: 0;
      width: 100%;
      height: 100%;
      .content .contact h3 {
        font-size: 1.4rem;
      }
    }
  }
`;

export const OurPartners = styled.div`
  box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
  .content {
    width: 90%;
    margin: auto;
  }
`;
