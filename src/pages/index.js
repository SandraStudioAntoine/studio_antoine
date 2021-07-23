import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeVid from "../images/inicio.mp4"
import WordImg from "../images/wordmark.svg"

const IndexPage = () => {
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
      <Seo title="Home" />
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
        <div
          style={{
            position: `relative`,
            top: `0`,
            left: `0`,
            height: `calc(100vh - 80px)`,
            width: `100vw`,
            background: `#ffffff`,
            overflow: `hidden`,
          }}
        >
          <video
            autoplay="true"
            muted="true"
            src={HomeVid}
            style={{
              position: `absolute`,
              top: `50%`,
              left: `50%`,
              width: `100vw`,
              transform: `translate(-50%,-50%)`,
            }}
          >
          </video>
        </div>
        <div
          className="grid"
          style={{
            position: `relative`,
          }}
        >
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
                key={edge.node.id}
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
                      bottom: `42px`,
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
                      bottom: `20px`,
                      fontSize: `12px`,
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
        <div
            style={{
              position: `absolute`,
              bottom: `0`,
              right: `0`,
              width: `50vw`,
              height: `25vw`,
            }}
          >
            <img 
              src={WordImg}
              alt="Studio Antoine Logo"
              style={{
                position: `relative`,
                top: `50%`,
                left: `50%`,
                width: `20vw`,
                transform: `translate(-50%,-50%)`,
              }}
            />
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage