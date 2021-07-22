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
      <div
        style={{
          position: `absolute`,
          top: `80px`,
          left: `0`,
          minHeight: `calc(100vh - 80px)`,
          width: `100vw`,
          background: `#ffffff`,
        }}
      >
        <div className="grid">
          {data.allContentfulProject.edges.map(edge => {
            return (
              <Link
                className="item-link"
                to={`/projects/${edge.node.slug}/`}
                style={{
                  position: `relative`,
                  height: `0`,
                  width: `0`,
                  margin: `0`,
                  padding: `0`,
                }}
              >
                <div
                  className="item"
                  style={{
                    position: `relative`,
                    float: `left`,
                    height: `25vw`,
                    width: `25vw`,
                    background: `#ffffff`,
                    margin: `0`,
                  }}
                >
                  {edge.node.featuredImage && (
                    <Img
                      className="featured"
                      fluid={edge.node.featuredImage.fluid}
                      alt={edge.node.title}
                      style={{
                        position: `absolute`,
                        top: `0`,
                        right: `0`,
                        height: `25vw`,
                        width: `25vw`,
                        objectFit: `cover`,
                      }}
                    />
                  )}
                  <h2
                    style={{
                      position: `absolute`,
                      left: `20px`,
                      bottom: `40px`,
                      fontSize: `14px`,
                      fontFamily: `ogg`,
                      color: `#212121`,
                      margin: `0`,
                      fontWeight: `normal`,
                    }}
                  >
                    {edge.node.projectTitle}
                  </h2>
                  <h3
                    style={{
                      position: `absolute`,
                      left: `20px`,
                      bottom: `20px`,
                      fontSize: `10px`,
                      fontFamily: `relativebook`,
                      color: `#212121`,
                      margin: `0`,
                      fontWeight: `normal`,
                    }}
                  >
                    {edge.node.location}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects