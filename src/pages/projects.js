import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProject(sort: {fields: projectTitle, order: ASC}) {
          edges {
            node {
              projectTitle
              location
              slug
              id
              featuredImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Projects" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="projects">
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li className="project" key={edge.node.id}>
              <h2>
                <Link to={`/projects/${edge.node.slug}/`}>{edge.node.projectTitle}</Link>
              </h2>
              {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <div className="button">
                <Link to={`/projects/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Projects