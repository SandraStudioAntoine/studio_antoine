import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulVideo(slug: { eq: $slug }) {
      projectTitle
      video {
        file {
          url
        }
      }

    }
  }
`

const Video = props => {
  if (typeof props.data.contentfulVideo.video !== null) {
    return (
      <Layout>
        <SEO title={props.data.contentfulVideo.projectTitle} />
        <div
          className="project-wrapper"
          style={{
            top: `80px`,
            left: `0`,
            height: `calc(100vh - 80px)`,
            width: `100vw`,
          }}
        >
          <div className="content">
            
              <video
                className="archive-video"
                src={props.data.contentfulVideo.video.file.url}
                controls="true"
                style={{
                  top: `80px`,
                  left: `0`,
                  height: `calc(100vh - 80px)`,
                  width: `100vw`,
                  backgroundColor: `#212121`,
                }}
              >
              </video>
            
          </div>
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title={props.data.contentfulVideo.projectTitle} />
        <div
          className="project-wrapper"
          style={{
            top: `80px`,
            left: `0`,
            height: `calc(100vh - 80px)`,
            width: `100vw`,
          }}
        >
          <div className="content">
            
              <p>Hello</p>
            
          </div>
        </div>
      </Layout>
    )
  }


}

export default Video