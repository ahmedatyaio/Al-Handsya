import React from 'react';
import { Link } from 'gatsby';
import $ from 'jquery';
import styled from 'styled-components';

const StyledMobileMnu = styled.div`
  background: white;
  height: 100vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow-y: auto;
  transform: translate3d(0, 100%, 0);
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  .content {
    width: 80%;
    margin: 7rem auto;
  }
  .close {
    background: ${props => props.theme.colors.black};
    border: 0;
    color: #ffffff;
    padding: 1.2rem;
    position: absolute;
    right: 4rem;
    top: 9.5rem;
    font-size: 2.5rem;
  }
`;

const StyledFullMenu = styled.ul`
  padding: 0;
  height: 90%;
  li {
    a,
    h2 {
      font-size: 1.6rem;
      color: #000000;
      font-family: ${props => props.theme.fonts.secondary};
      margin: 2rem 0;
      display: inline-block;
    }
    ul {
      padding: 0;
      li a {
        color: #666666;
        font-size: 1.4rem;
        margin: 1rem 0;
      }
    }
  }
`;

const StyledMenu = styled.ul`
  min-width: 100%;
  display: flex;
  position: fixed;
  padding: 0;
  box-shadow: 0 1px 9px 1px rgba(184, 184, 184, 0.7);
  background: #fff;
  bottom: 0;
  margin: 0;
  border-radius: 4px 4px 0 0;
  z-index: 1000;
  li {
    width: 25%;
    margin: auto;
    text-align: center;
    a,
    button {
      color: ${props => props.theme.colors.black};
      font-family: ${props => props.theme.fonts.primary};
      display: flex;
      flex-direction: column;
      padding: 2rem 0;
    }
    button {
      border: 0;
      background: transparent;
      margin: 0 auto;
    }
    span {
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }
  }
  .active-mobile-panel {
    color: ${props => props.theme.colors.yellow3};
  }
  @media (min-width: 835px) {
    display: none;
  }
`;

const MobileMenu = () => {
  const showFullMenu = () => {
    const selectedEl = $('.full-menu');

    selectedEl.toggleClass('open-full-mobile-menu');
  };

  const closeMenu = () => {
    const selectedEl = $('.full-menu');

    selectedEl.removeClass('open-full-mobile-menu');
  };

  return (
    <>
      <StyledMobileMnu className="full-menu">
        <button aria-label="close" onClick={closeMenu} className="close">
          <span className="icon-chevron-down"></span>
        </button>
        <div className="content">
          <StyledFullMenu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <h2>Services</h2>
              <ul>
                <li>
                  <Link to="/">General Construction Division</Link>
                </li>
                <li>
                  <Link to="/">Specialized Engineering App. Division</Link>
                </li>
                <li>
                  <Link to="/">Construction Chemicals Dist. Division</Link>
                </li>
                <li>
                  <Link to="/">Kryton Execlusive Distributors</Link>
                </li>
              </ul>
            </li>
            <li>
              <h2>Projects</h2>
              <ul>
                <li>
                  <Link to="/">General Construction projects</Link>
                </li>
                <li>
                  <Link to="/">Speciality engineering projects</Link>
                </li>
              </ul>
            </li>
            <li>
              <h2>Products</h2>
              <ul>
                <li>
                  <Link to="/">Kryton Waterproofing</Link>
                </li>
                <li>
                  <Link to="/">Insuwrap PVC waterproofing</Link>
                </li>
                <li>
                  <Link to="/">Alchimica (Sealants & Adhesives)</Link>
                </li>
                <li>
                  <Link to="/">Olin - France (Sealants & Adhesives)</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </li>
            <li>
              <h2>Kryton</h2>
              <ul>
                <li>
                  <Link to="/">Why KRYTON Waterproofing</Link>
                </li>
                <li>
                  <Link to="/">What is Krystol Technology</Link>
                </li>
                <li>
                  <Link to="/">Where to Use Kryton Materials</Link>
                </li>
                <li>
                  <Link to="/">Kryton Systems</Link>
                </li>
              </ul>
            </li>
            <li>
              <h2>Distributors</h2>
              <ul>
                <li>
                  <Link to="/">Alexandria Distributors</Link>
                </li>
                <li>
                  <Link to="/">Cairo Distributors</Link>
                </li>
                <li>
                  <Link to="/">Beni Suef Distributors</Link>
                </li>
                <li>
                  <Link to="/">Tanta Distributors</Link>
                </li>
                <li>
                  <Link to="/">Become a Distributor?</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">Careers</Link>
            </li>
            <li>
              <Link to="/about">Contact</Link>
            </li>
          </StyledFullMenu>
          <br />
        </div>
      </StyledMobileMnu>
      <StyledMenu>
        <li>
          <Link activeClassName="active-mobile-panel" to="/">
            <span className="icon-home"></span>
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="active-mobile-panel" to="/about">
            <span className="icon-briefcase"></span>
            Services
          </Link>
        </li>
        <li>
          <Link activeClassName="active-mobile-panel" to="/about">
            <span className="icon-buildings"></span>
            Projects
          </Link>
        </li>
        <li>
          <Link activeClassName="active-mobile-panel" to="/about">
            <span className="icon-brush"></span>
            Products
          </Link>
        </li>
        <li>
          <button name="other" onClick={showFullMenu}>
            <span className="icon-vertical-dots"></span>
            Other
          </button>
        </li>
      </StyledMenu>
    </>
  );
};

export default MobileMenu;
