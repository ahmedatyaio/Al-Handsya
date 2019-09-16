import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const StyledCarouselItem = styled.div`
  background: ${props => props.background};
  outline: 0;
  font-family: ${props => props.theme.fonts.primary};
  height: 70vh;
  .content {
    height: 100%;
    display: flex;
  }
  .typography {
    width: 50%;
    height: 100%;
    h1 {
      font-size: 6rem;
      width: 50%;
      color: ${props => props.theme.colors.black};
    }
    a {
      display: inline-block;
      padding: 2rem 5rem;
      letter-spacing: 0.3rem;
      border: 2px solid ${props => props.theme.colors.yellow2};
      border-radius: 5rem;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.black};
    }
  }
  .image {
    width: 50%;
    img {
      height: 100%;
    }
  }
`

const Header = ({ photo }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }
  return (
    <Slider {...settings}>
      <StyledCarouselItem background="#F4EFE9">
        <div className="container">
          <div className="content">
            <Img fluid={photo} />
            <div className="typo">
              <h1>General Construction Department</h1>
              <a href="#">R E A D M O R E</a>
            </div>
          </div>
        </div>
      </StyledCarouselItem>
      <StyledCarouselItem background="#F6FAFE">
        <div className="container">SIIICK V2</div>
      </StyledCarouselItem>
    </Slider>
  )
}

export default Header
