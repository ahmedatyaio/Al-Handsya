import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import SEO from './seo';

const KrytonSystems = ({ photo, title }) => {
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
        bottom: 2rem;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 4rem;
        @media (max-width: 450px) {
          font-size: 3rem;
          width: 90%;
        }
      }
    }
  `;

  const StyledMenu = styled.ul`
    display: flex;
    position: relative;
    padding: 0;
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    margin: -3rem auto;
    li {
      font-size: 1.5rem;
      margin-right: 3rem;
      font-family: ${props => props.theme.fonts.secondary};
      border: 1px solid ${props => props.theme.colors.black};
      a {
        color: ${props => props.theme.colors.black};
        padding: 1.5rem 2rem;
        display: inline-block;
        letter-spacing: 0.1rem;
        &:hover {
          color: #ffffff;
          background: ${props => props.theme.colors.black};
        }
      }
    }

    @media (max-width: 834px) {
      li {
        margin-right: 2rem;
        a {
          padding: 1.5rem;
        }
      }
    }
    @media (max-width: 450px) {
      overflow-x: auto;
      li {
        flex: 0 0 auto;
      }
    }
  `;

  const StyledWhy = styled.div`
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: 6rem auto;
    justify-content: space-between;
    .systems {
      width: 25%;
      margin: 0;
      padding: 0;
      background: #f7f7f7;
      padding: 3rem 2rem;
      .active-system {
        color: ${props => props.theme.colors.yellow3};
      }
      li {
        margin: 1rem 0;
        font-size: 1.5rem;
        font-family: ${props => props.theme.fonts.secondary};
        border-bottom: 1px solid#dcdcdc;
        padding-bottom: 2rem;
        a {
          color: ${props => props.theme.colors.black};
          &:hover {
            color: ${props => props.theme.colors.yellow3};
          }
        }
      }
    }
    .photo {
      width: 70%;
    }
    @media (max-width: 834px) {
      .systems {
        width: 24%;
        padding: 2rem 1.5rem;
      }
    }
    @media (max-width: 450px) {
      .systems {
        width: 100%;
      }
      .photo {
        width: 100%;
        margin-top: 3rem;
      }
    }
  `;

  return (
    <Layout>
      <SEO title={title} />
      <StyledHeader>
        <div className="content">
          <h1>Kryton Systems</h1>
        </div>
      </StyledHeader>
      <StyledMenu>
        <li>
          <Link activeClassName="active-kryton-page" to="/kryton/why-kryton">
            Why Kryton
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/kryton/what-is-kryton"
          >
            What is Kryton
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/kryton/where-to-use-kryton"
          >
            Where to use Kryton
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active-kryton-page"
            to="/kryton/kryton-systems/concrete-waterproofing"
          >
            Kryton Systems
          </Link>
        </li>
      </StyledMenu>
      <StyledWhy>
        <ul className="systems">
          <li>
            <Link
              to="/kryton/kryton-systems/concrete-waterproofing"
              activeClassName="active-system"
            >
              Concrete Waterproofing Admixtures "KIM"
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/mortar-waterproofing"
              activeClassName="active-system"
            >
              Mortar Waterproofing Admixtures "KMA"
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/waterproofing-coatings"
              activeClassName="active-system"
            >
              Waterproofing Coatings "Krystol T1 & T2"
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/crack-repair"
              activeClassName="active-system"
            >
              Crack Repair Systems
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/krystol-waterstop"
              activeClassName="active-system"
            >
              Krystol Waterstop Systems
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/hydrostop-sealer"
              activeClassName="active-system"
            >
              Hydrostop Sealer
            </Link>
          </li>
          <li>
            <Link
              to="/kryton/kryton-systems/hydrostop-restore"
              activeClassName="active-system"
            >
              Hydrostop Restore & Protect System
            </Link>
          </li>
        </ul>
        <Img className="photo" fluid={photo} />
      </StyledWhy>
    </Layout>
  );
};

export default KrytonSystems;
