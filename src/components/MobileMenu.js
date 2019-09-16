import React from 'react';
import { Link } from 'gatsby';
import $ from 'jquery';
import styled from 'styled-components';

const StyledMobileMenu = styled.div`
  min-width: 100%;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const StyledMenu = styled.ul`
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  position: fixed;
  padding: 0;
  box-shadow: 0 1px 9px 1px rgba(184, 184, 184, 0.7);
  background: #fff;
  bottom: 0;
  height: 10vh;
  margin: 0;
  border-radius: 4px 4px 0 0;
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
    color: ${props => props.theme.colors.yellow};
  }
`;

const StyledFullMenu = styled.div`
  background: rgba(51, 51, 51, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: none;
  .down {
    position: absolute;
    right: 1.5rem;
    top: 3rem;
    border: 0;
    border-radius: 10rem;
    z-index: 10;
    font-family: ${props => props.theme.fonts.primary};
  }
  ul {
    position: absolute;
    bottom: 10vh;
    margin: 0;
    padding: 0;
    width: 0;
    overflow-y: scroll;
    background: #f9f9f9;
    li {
      padding: 2.3rem 2rem;
      border-bottom: 1px solid#e6e6e6;
      a {
        color: ${props => props.theme.colors.black};
        font-size: 1.3rem;
        font-family: ${props => props.theme.fonts.secondary};
      }
    }
  }
`;

const MobileMenu = () => {
  const showFullMenu = () => {
    const selectedEl = $('.full-menu ul');

    if (selectedEl.css('width') === '0px') {
      $('.full-menu').fadeIn();

      selectedEl.animate(
        {
          width: '100%'
        },
        600
      );
    } else {
      $('.full-menu').fadeOut();

      selectedEl.animate(
        {
          width: '0'
        },
        600
      );
    }
  };

  const closeMenu = () => {
    const selectedEl = $('.full-menu ul');

    $('.full-menu').fadeOut();

    selectedEl.animate(
      {
        width: '0'
      },
      600
    );
  };
  return (
    <StyledMobileMenu>
      <StyledFullMenu className="full-menu">
        <button className="down" onClick={closeMenu}>
          X
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">Kryton</Link>
          </li>
          <li>
            <Link to="/">Distributors</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </StyledFullMenu>
      <StyledMenu>
        <li>
          <Link activeClassName="active-mobile-panel" to="#">
            <span className="icon-home"></span>
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="active-mobile-panel" to="#">
            <span className="icon-briefcase"></span>
            Services
          </Link>
        </li>
        <li>
          <Link activeClassName="active-mobile-panel" to="#">
            <span className="icon-buildings"></span>
            Projects
          </Link>
        </li>
        <li>
          <Link activeClassName="active-mobile-panel" to="#">
            <span className="icon-brush"></span>
            Products
          </Link>
        </li>
        <li>
          <span className="icon-vertical-dots"></span>
          <button onClick={showFullMenu}>Other</button>
        </li>
      </StyledMenu>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
