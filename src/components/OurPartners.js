import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { OurPartners } from './styles/index';

const OurPartnersComponent = ({ allPartners }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <OurPartners>
      <div className="container">
        <div className="content">
          <Slider {...settings}>
            {allPartners.edges.map(partner => {
              return (
                <div className="item" key={partner.node.logo.title}>
                  <Img fluid={partner.node.logo.fluid} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </OurPartners>
  );
};

export default OurPartnersComponent;
