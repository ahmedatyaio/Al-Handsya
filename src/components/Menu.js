import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import $ from 'jquery';

const Nav = styled.nav`
  font-family: ${props => props.theme.fonts.primary};
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

// const MenuTop = styled.div`
//   width: 100%;
//   color: ${props => props.theme.colors.black};
//   margin-bottom: 1rem;
//   padding: 2.5rem 0;
//   font-family: $font1;
//   font-weight: bold;
//   box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
// `

// const MenuTopContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   max-width: ${props => props.theme.sizes.maxWidth};
//   margin: 0 auto;
//   @media (min-width: 320px) and (max-width: 480px) {
//     justify-content: space-evenly;
//   }
// `

const Logo = styled.div`
  font-size: 2rem;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.yellow2};
    display: flex;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      justify-content: center;
    }
    span {
      font-size: 2.6rem;
      margin-right: 1rem;
      background: ${props => props.theme.colors.yellow2};
      padding: 1.3rem;
      transition: 0.4s all;
      &:before {
        color: #000000;
      }
      &:hover {
        background: ${props => props.theme.colors.black};
        &:before {
          color: ${props => props.theme.colors.yellow2};
        }
      }
    }
    div {
      h1 {
        font-size: 1.8rem;
        margin-bottom: 0;
      }
      p {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-family: ${props => props.theme.fonts.secondary};
        color: ${props => props.theme.colors.black};
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }
`;

// const MobileMenuButton = styled.button`
//   background: transparent;
//   font-size: 3rem;
//   border: 0;
//   display: none;
//   span {
//     &:before {
//       color: ${props => props.theme.colors.yellow};
//     }
//   }
//   @media (min-width: 320px) and (max-width: 480px) {
//     display: block;
//   }
// `

const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  color: #5c5757;
  width: ${props => props.theme.responsive.maxWidth};
  margin: 0 auto;
  div {
    font-size: 1.2rem;
    margin: 0 1.2rem;
    display: flex;
    align-items: center;
    span {
      margin-right: 0.6rem;
      font-size: 1.8rem;
      color: ${props => props.theme.colors.yellow3};
    }
    a {
      color: ${props => props.theme.colors.yellow3};
      border: 2px solid ${props => props.theme.colors.yellow3};
      padding: 1.5rem 2rem;
      transition: 0.4s all;
      &:hover {
        background: ${props => props.theme.colors.yellow3};
        color: #000000;
      }
    }
  }
  @media (max-width: 1024px) {
    justify-content: center;
    border-bottom: 1px solid#f1f1f1;
    width: 100%;
    padding: 1.5rem 0;
  }
`;

// const MenuLinks = styled.div`
//   background: ${props => props.theme.colors.yellow};
// `

// const MenuLinksContent = styled.ul`
//   max-width: ${props => props.theme.sizes.maxWidth};
//   margin: 0 auto;
//   padding: 0;
//   display: flex;
//   a {
//     text-decoration: none;
//     font-weight: 600;
//     color: #000000;
//     font-size: 1.3rem;
//     padding: 2.2rem;
//     &:hover {
//       background: #fdd835;
//     }
//   }
//   li {
//     font-family: ${props => props.theme.fonts.secondary};
//   }
//   @media (min-width: 320px) and (max-width: 480px) {
//     flex-direction: column;
//     display: none;
//     li {
//       padding: 1.5rem 2rem;
//       border-bottom: 1px solid#f1de39;
//     }
//   }
// `
// const SecondaryMenu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 1rem;
//   width: ${props => props.theme.responsive.maxWidth};
//   margin: 0 auto;
// `

const PrimaryMenu = styled.div`
  box-shadow: 0px 3px 8px 0px rgba(184, 184, 184, 0.3);
  padding: 1rem 0 2rem;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.theme.responsive.maxWidth};
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 90%;
    }
  }
  @media (max-width: 1024px) {
    border-bottom: 1px solid#f1f1f1;
    box-shadow: none;
    padding: 1.5rem;
    .content {
      justify-content: center;
    }
  }
`;
const MenuLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  width: 65%;
  li {
    position: relative;
    a,
    button {
      background: transparent;
      border: 0;
      font-size: 1.5rem;
      color: #5c5757;
      font-family: ${props => props.theme.fonts.secondary};
      padding: 0;
    }
    a:hover {
      color: ${props => props.theme.colors.black};
      border-bottom: 2px solid ${props => props.theme.colors.yellow2};
    }
    button {
      cursor: pointer;
    }
    .dropdown-menu {
      padding: 0;
      margin: 0;
      position: absolute;
      top: 3rem;
      width: 230px;
      border: 1px solid#d9d9d9;
      z-index: 5;
      background: #ffffff;
      display: none;
      border-radius: 2px 2px 5px 5px;
      li {
        padding: 2.2rem 1.8rem;
        border-bottom: 1px solid#d9d9d9;
        line-height: 2rem;
      }
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Menu = () => {
  const onDropdownTrigger = name => {
    $(`.${name}-dropdown`).slideToggle();
  };

  // click(function() {
  //   console.log($(this))
  //   var dropdown = $(".dropdown-menu")
  //   if (dropdown.is(":visible")) {
  //     dropdown.slideUp(200)
  //   }
  // })

  useEffect(() => {
    $(document).on('click', e => {
      const dropdown = $('.dropdown-menu');
      if (e.target.id !== 'dropdown') {
        dropdown.slideUp(200);
      }
    });
  }, []);

  return (
    <Nav>
      <ContactDetails>
        <div>
          <span className="icon-phone"></span> +20 1155184811
        </div>
        <div>
          <span className="icon-email"></span> Alhandsya@alhandsya.com
        </div>
      </ContactDetails>
      <PrimaryMenu>
        <div className="content">
          <Logo>
            <Link to="/">
              <span className="icon-logo"></span>
              <div>
                <h1>Al-Handsya</h1>
                <p>For Construction and Real Estate</p>
              </div>
            </Link>
          </Logo>
          <MenuLinks>
            <li>
              <Link to="/" activeClassName="current-page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" activeClassName="current-page">
                About
              </Link>
            </li>
            <li>
              <button
                id="dropdown"
                onClick={() => onDropdownTrigger('services')}
              >
                Services +
              </button>
              <ul className="dropdown-menu services-dropdown">
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
              <button
                id="dropdown"
                onClick={() => onDropdownTrigger('projects')}
              >
                Projects +
              </button>
              <ul className="dropdown-menu projects-dropdown">
                <li>
                  <Link to="/">General Construction projects</Link>
                </li>
                <li>
                  <Link to="/">Speciality engineering projects</Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                id="dropdown"
                onClick={() => onDropdownTrigger('products')}
              >
                Products +
              </button>
              <ul className="dropdown-menu products-dropdown">
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
              <button id="dropdown" onClick={() => onDropdownTrigger('kryton')}>
                Kryton +
              </button>
              <ul className="dropdown-menu kryton-dropdown">
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
              <button
                id="dropdown"
                onClick={() => onDropdownTrigger('distributors')}
              >
                Distributors +
              </button>
              <ul className="dropdown-menu distributors-dropdown">
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
              <Link to="/" activeClassName="current-page">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" activeClassName="current-page">
                Contact Us
              </Link>
            </li>
          </MenuLinks>
          {/* <MobileMenuButton onClick={handleToggle}>
          <span className="icon-bx-menu-alt-right"></span>
        </MobileMenuButton> */}
        </div>
      </PrimaryMenu>
    </Nav>
  );
};

export default Menu;
