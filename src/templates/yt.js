import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulYt(slug: { eq: $slug }) {
      projectTitle
      ytId
    }
  }
`

const Video = props => {
  const youtubeUrl = `https://www.youtube.com/embed/${props.data.contentfulYt.ytId}?rel=0?modestbranding=1`;

  return (
    <Layout>
      <SEO title={props.data.contentfulYt.projectTitle} />
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
          <iframe
            src={youtubeUrl}
            frameBorder="0"
            style={{
              top: `80px`,
              left: `0`,
              height: `calc(100vh - 80px)`,
              width: `100vw`,
              backgroundColor: `#212121`,
            }}
          >
          </iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Video