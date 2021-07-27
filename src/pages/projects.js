import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WordImg from "../images/wordmark.svg"


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
                        objectFit: `cover`,
                      }}
                    />
                  )}
                  <h2
                    style={{
                      position: `absolute`,
                      left: `20px`,
                      top: `calc(50% - 10px)`,
                      fontSize: `16px`,
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
                      top: `calc(50% + 10px)`,
                      fontSize: `12px`,
                      fontFamily: `ogg`,
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
          <div
            className="placeholder-wrapper"
          >
            <img 
              src={WordImg}
              alt="Studio Antoine Logo"
              style={{
                position: `relative`,
                top: `50%`,
                left: `50%`,
                transform: `translate(-50%,-50%)`,
              }}
            />
          </div>
          </div>
          
        </div>
    </Layout>
  )
}

export default Projects