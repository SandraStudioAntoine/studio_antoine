import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      projectTitle
      location
      images {
        id
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulProject.projectTitle} />
      <Link to="/projects/">Projects</Link>
      <div className="content">
        <h1>{props.data.contentfulProject.projectTitle}</h1>
        {props.data.contentfulProject.images.map(({ fluid, id }) => (
          <Img
            key={id}
            fluid={fluid}
            className="images"
          />
        ))}
      </div>
    </Layout>
  )
}

export default Project