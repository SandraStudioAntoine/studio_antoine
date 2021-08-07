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
        contentfulProjectsSection {
          projectOrder {
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
        <div className="home-video-wrapper">
          <video
            className="home-video"
            autoplay="true"
            muted="true"
            src={HomeVid}
          >
          </video>
        </div>
        <div className="grid">
          {data.contentfulProjectsSection.projectOrder.map(projectOrder => {
            return (
              <Link
                className="item-link"
                to={`/projects/${projectOrder.slug}/`}
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
                  {projectOrder.featuredImage && (
                    <Img
                      className="featured"
                      fluid={projectOrder.featuredImage.fluid}
                      alt={projectOrder.title}
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
                    {projectOrder.projectTitle}
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
                    {projectOrder.location}
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

export default IndexPage