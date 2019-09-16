import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Project } from "./styles/index"

const ProjectComponent = ({ project }) => {
  return (
    <Project>
      <Link to={`/project/${project.projectName}`}>
        <Img fluid={project.heroImage.fluid} />
      </Link>
      <h6>{project.projectType}</h6>
      <Link to={`/project/${project.projectName}`}>
        <h2>{project.projectName}</h2>
      </Link>
    </Project>
  )
}

export default ProjectComponent
