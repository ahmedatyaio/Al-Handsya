// import React, { Component } from 'react';
// import { Link } from 'gatsby';
// import Slider from 'react-slick';
// import Img from 'gatsby-image';
// import styled from 'styled-components';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import photoOne from '../images/homepage/header.png';
// import photoTwo from '../images/homepage/header-2.png';

// export class HeaderCarousel extends Component {
//   next() {
//     this.slider.slickNext();
//   }
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       fade: true,
//       speed: 500,
//       autoplay: false,
//       autoplaySpeed: 2000,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };

//     console.log(this.props);

//     // const { photoOne, photoTwo } = this.props;

// const StyledCarousel = styled.div`
//   overflow: hidden;
//   position: relative;
//   .carousel-item {
//     height: 75vh;
//     outline: 0;
//     .content {
//       width: ${props => props.theme.responsive.maxWidth};
//       margin: 0 auto;
//       height: 100%;
//       display: flex;
//       .heading-typo {
//         width: 40%;
//         height: 100%;
//         display: flex;
//         justify-content: center;
//         flex-direction: column;
//         h2 {
//           font-size: 6rem;
//           font-family: ${props => props.theme.fonts.primary};
//           font-weight: 900;
//           color: ${props => props.theme.colors.black};
//           margin: 0;
//         }
//         a {
//           font-family: ${props => props.theme.fonts.secondary};
//           text-transform: uppercase;
//           background: transparent;
//           border: 2px solid ${props => props.theme.colors.yellow};
//           padding: 1.3rem 3.5rem;
//           margin-top: 3rem;
//           display: inline-block;
//           font-size: 1.7rem;
//           letter-spacing: 0.5rem;
//           color: ${props => props.theme.colors.black};
//           border-radius: 3rem;
//         }
//         button {
//           display: block;
//         }
//       }
//       .photo {
//         width: 60%;
//         position: relative;
//         img {
//           width: 100%;
//           position: absolute;
//           bottom: 0;
//         }
//       }
//     }
//   }
// `;

// const CarouselItemOne = styled.div`
//   background: #f4efe9;
// `;

// const CarouselItemTwo = styled.div`
//   background: #f6fafe;
// `;

//     return (
// <StyledCarousel>
//   <Slider ref={c => (this.slider = c)} {...settings}>
//     <CarouselItemOne className="carousel-item">
//       <div className="content">
//         <div className="heading-typo">
//           <h2>General Construction Department</h2>
//           <div>
//             <Link to="/">Read More</Link>
//             <button onClick={this.next}>NEXT</button>
//           </div>
//         </div>
//         <div className="photo">
//           <img src={photoOne} alt="header photo" />
//         </div>
//       </div>
//     </CarouselItemOne>
//     {/* <CarouselItemTwo className="carousel-item">
//       <div className="content">
//         <div className="heading-typo">
//           <h2>General Construction Department</h2>
//           <div>
//             <Link to="/">Read More</Link>
//           </div>
//         </div>
//         <div className="photo">
//           <img src={photoTwo} alt="header photo" />
//         </div>
//       </div>
//     </CarouselItemTwo> */}
//   </Slider>
// </StyledCarousel>
//     );
//   }
// }

// export default HeaderCarousel;
import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import photoOne from '../images/homepage/header.png';
import photoTwo from '../images/homepage/header-2.png';

class HeaderCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const StyledCarousel = styled.div`
      overflow: hidden;
      position: relative;
      .carousel-item {
        height: 75vh;
        outline: 0;
        .content {
          width: ${props => props.theme.responsive.maxWidth};
          margin: 0 auto;
          height: 100%;
          display: flex;
          .heading-typo {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            h2 {
              font-size: 6rem;
              font-family: ${props => props.theme.fonts.primary};
              font-weight: 900;
              color: ${props => props.theme.colors.black};
              margin: 0;
            }
            a {
              font-family: ${props => props.theme.fonts.secondary};
              text-transform: uppercase;
              background: transparent;
              border: 2px solid ${props => props.theme.colors.yellow};
              padding: 1.3rem 3.5rem;
              margin-top: 3rem;
              display: inline-block;
              font-size: 1.7rem;
              letter-spacing: 0.5rem;
              color: ${props => props.theme.colors.black};
              border-radius: 3rem;
            }
            .slick-btns {
              margin-top: 4rem;
              position: relative;
              z-index: 10;
              button {
                cursor: pointer;
                border: 0;
                font-size: 1rem;
              }
              .next {
                background: ${props => props.theme.colors.yellow};
                color: ${props => props.theme.colors.black};
                padding: 1.2rem 3rem;
              }
              .previous {
                background: ${props => props.theme.colors.black};
                color: white;
                padding: 1.2rem 1.5rem;
                transition: 0.5s padding;
                &:hover {
                  padding: 1.2rem 2.5rem;
                }
              }
            }
          }
          .photo {
            width: 60%;
            position: relative;
            img {
              width: 100%;
              position: absolute;
              bottom: 0;
              max-height: 95%;
              object-position: top;
              object-fit: contain;
            }
          }
        }
      }
    `;

    const CarouselItemOne = styled.div`
      background: #f4efe9;
    `;

    const CarouselItemTwo = styled.div`
      background: #f6fafe;
    `;

    return (
      <StyledCarousel>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <CarouselItemOne className="carousel-item">
            <div className="content">
              <div className="photo">
                <img src={photoOne} alt="header one" />
              </div>
              <div className="heading-typo">
                <h2>General Construction Department</h2>
                <div>
                  <Link to="/">Read More</Link>
                  <div className="slick-btns">
                    <button className="button previous" onClick={this.previous}>
                      &#8249;
                    </button>
                    <button className="button next" onClick={this.next}>
                      &#8250;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItemOne>
          <CarouselItemTwo className="carousel-item">
            <div className="content">
              <div className="heading-typo">
                <h2>General Construction Department</h2>
                <div>
                  <Link to="/">Read More</Link>
                  <div className="slick-btns">
                    <button className="button previous" onClick={this.previous}>
                      &#8249;
                    </button>
                    <button className="button next" onClick={this.next}>
                      &#8250;
                    </button>
                  </div>
                </div>
              </div>
              <div className="photo">
                <img src={photoTwo} alt="header two" />
              </div>
            </div>
          </CarouselItemTwo>
        </Slider>
      </StyledCarousel>
    );
  }
}
export default HeaderCarousel;
