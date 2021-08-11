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
        contentfulVideoSection {
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
          youtubeVids {
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
      <SEO title="Things We Love" />
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
          {data.contentfulVideoSection.videoOrder.map(videoOrder => {
            return (
              <Link
                className="item-link"
                to={`/things-we-love/${videoOrder.slug}/`}
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
                      width: `calc(100% - 40px)`,
                      fontSize: `16px`,
                      lineHeight: `20px`,
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
          {data.contentfulVideoSection.youtubeVids.map(youtubeVids => {
            return (
              <Link
                className="item-link"
                to={`/things-we-love/${youtubeVids.slug}/`}
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
                  {youtubeVids.featuredImage && (
                    <Img
                      className="featured"
                      fluid={youtubeVids.featuredImage.fluid}
                      alt={youtubeVids.title}
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
                      width: `calc(100% - 40px)`,
                      fontSize: `16px`,
                      lineHeight: `20px`,
                      fontFamily: `ogg`,
                      color: `#212121`,
                      margin: `0`,
                      fontWeight: `normal`,
                    }}
                  >
                    {youtubeVids.projectTitle}
                  </h2>
                </div>
              </Link>
            )
          })}
          </div>          
        </div>
    </Layout>
  )
}

export default Archive