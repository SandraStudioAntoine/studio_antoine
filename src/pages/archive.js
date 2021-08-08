import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WordImg from "../images/wordmark.svg"


const Archive = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulVideoOrder {
          videoOrder {
            projectTitle
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
      <SEO title="Archive" />
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
          {data.contentfulVideoOrder.videoOrder.map(videoOrder => {
            return (
              <Link
                className="item-link"
                to={`/archive/${videoOrder.slug}/`}
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
                  {videoOrder.featuredImage && (
                    <Img
                      className="featured"
                      fluid={videoOrder.featuredImage.fluid}
                      alt={videoOrder.title}
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
                      top: `50%`,
                      transform: `translateY(-50%)`,
                      fontSize: `16px`,
                      fontFamily: `ogg`,
                      color: `#212121`,
                      margin: `0`,
                      fontWeight: `normal`,
                    }}
                  >
                    {videoOrder.projectTitle}
                  </h2>
                </div>
              </Link>
            )
          })}
{/*          <div
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
          </div>*/}
          </div>
          
        </div>
    </Layout>
  )
}

export default Archive