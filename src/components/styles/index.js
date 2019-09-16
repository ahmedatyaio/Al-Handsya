import styled from "styled-components"

export const Header = styled.div`
  height: 80vh;
  position: relative;
  .header-bg {
    height: 100%;
  }
  @media (min-width: 320px) and (max-width: 360px) {
    height: 90vh;
  }
`

export const HeaderParagraph = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  span {
    font-size: 18rem;
  }
  h1 {
    font-size: 5rem;
    font-family: ${props => props.theme.fonts.primary};
    margin-bottom: 0;
    margin-top: 0.8rem;
  }
  p {
    margin-top: 0.8rem;
    margin-bottom: 0;
    font-family: ${props => props.theme.fonts.secondary};
    color: #b4b4b4;
    font-weight: 600;
    font-size: 1.4rem;
  }
`

export const ServicesBlocks = styled.div`
  margin-top: -8rem;
  position: relative;
  display: flex;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .block-one {
    background: ${props => props.theme.colors.yellow};
  }
  .block-two {
    background: ${props => props.theme.colors.yellow2};
  }
  .block-three {
    background: ${props => props.theme.colors.yellow3};
  }
  .block-four {
    background: ${props => props.theme.colors.yellow4};
  }
`
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
    flex-direction: ${props => (props.mission ? "column-reverse" : "column")};
    margin-top: ${props => (props.mission ? "0" : "4rem")};
    .block-typography {
      width: 95%;
    }
    .block-image {
      width: 95%;
      margin: 5rem 0 3rem;
    }
  }
`

export const CategoriesPanel = styled.div`
  margin-top: 10rem;
  display: flex;
  width: 95%;
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
`

export const OurEquipment = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
  .equipment-block {
    width: 24%;
    background: #000000;
    position: relative;
    height: 25rem;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
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
      bottom: 2rem;
      position: absolute;
      text-align: center;
      width: 100%;
      color: #ffffff;
      font-family: ${props => props.theme.fonts.secondary};
      z-index: 10;
      font-size: 1.7rem;
    }
  }
`

export const CenterParagraph = styled.div`
  text-align: center;
  margin-top: 10rem;
  h6 {
    margin-bottom: 0;
    font-size: 1.8rem;
    font-family: ${props => props.theme.fonts.secondary};
    color: #dbdada;
  }
  h1 {
    margin-top: 0;
    font-size: 4rem;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.yellow};
  }
`
export const AssetsAndEquipment = styled.div`
  display: flex;
  justify-content: space-between;
  .service-block {
    background: #f2f2f2;
    width: 21%;
    border-left: 1px solid#fafafa;
    border-right: 1px solid#fafafa;
    &:hover {
      background: ${props => props.theme.colors.yellow3};
      color: #ffffff;
      a {
        color: #ffffff;
      }
    }
    span {
      font-size: 4rem;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    .service-block {
      width: 35%;
      border: 1px solid#fafafa;
      flex-direction: column-reverse;
      .block-right-side {
        width: 100%;
      }
      .block-left-side {
        width: 100%;
        text-align: left;
      }
    }
  }
`

export const OurProjects = styled.div`
  margin: 10rem auto;
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
      content: "";
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
`
export const Project = styled.div`
  margin: 0 1rem;
  img {
    width: 100%;
  }
  h6 {
    font-size: 1.4rem;
    color: #b7b7b7;
    margin: 2rem 0 1rem;
  }
  h2 {
    font-size: 3rem;
    color: #ffffff;
    width: 100%;
    margin: 0;
    font-family: ${props => props.theme.fonts.primary};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }
  }
`

export const CallToAction = styled.div`
  background: ${props => props.theme.colors.yellow};
  color: #000000;
  padding: 3rem 2rem;
  .cta-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 2rem;
    }
    a {
      padding: 2rem;
      background: #333333;
      color: #ffffff;
      font-size: 1.5rem;
      border-radius: 0.3rem;
      font-family: ${props => props.theme.fonts.primary};
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .cta-content {
      flex-direction: column;
      align-items: baseline;
      h2 {
        line-height: 2.8rem;
      }
    }
  }
`

export const OurPartners = styled.div`
  box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
  .content {
    width: 90%;
    margin: auto;
  }
`

export const LetsWorkTogether = styled.div`
  background-image: url("/static/contact-details-9f424df6b3e95c28ef6d9eee004d1f26.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  margin-top: 10rem;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0.75;
    overflow: hidden;
  }
  .top-heading {
    text-align: center;
    position: relative;
    font-family: ${props => props.theme.fonts.primary};
    padding-top: 10rem;
    margin-bottom: 5rem;
    h2 {
      color: #ffffff;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    p {
      color: ${props => props.theme.colors.yellow};
      font-size: 4.5rem;
      margin: 0;
    }
  }
  .bottom-details {
    position: relative;
    display: flex;
    justify-content: center;
    color: #ffffff;
    padding-bottom: 10rem;
    .details-block {
      width: 35%;
      text-align: center;
      margin: 0 1rem;
      padding: 2rem 0;
      span {
        font-size: 5rem;
        color: #000000;
        background: ${props => props.theme.colors.yellow};
        border-radius: 50%;
        padding: 1.5rem;
        transition: 0.4s all;
        &:hover {
          color: ${props => props.theme.colors.yellow};
          background: #000000;
        }
      }
      h3 {
        font-size: 1.8rem;
        width: 80%;
        margin: 3rem auto;
        font-family: ${props => props.theme.fonts.secondary};
        line-height: 3rem;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .top-heading p {
      font-size: 3rem;
    }
    .bottom-details {
      flex-direction: column;
      .details-block {
        width: 100%;
        margin: 0;
      }
    }
  }
`

export const Footer = styled.div`
  .footer-bottom {
    background: #000000;
    color: #ffffff;
    padding: 2rem;
  }
`
