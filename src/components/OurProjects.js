import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { OurProjects } from "../styles/pages/index"

const OurProjectsComponent = ({ allProjects }) => {
  console.log(allProjects)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <OurProjects>
      <div className="container">
        <div className="projects-header">
          <h2>PROJECTS</h2>
        </div>
        <div className="projects">
          <Slider {...settings}>
            {allProjects.edges.map(project => {
              return (
                <div className="item" key={project.node.projectName}>
                  <Img fluid={project.node.heroImage.fluid} />
                  <h1>{project.node.projectName}</h1>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </OurProjects>
  )
}

export default OurProjectsComponent
