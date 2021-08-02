import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Slider from 'react-slick'
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
          aspectRatio
        }
      }
    }
  }
`

const Project = props => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    rows: 1,
    autoplay: true,
    variableWidth: true,
    centerMode: true,
    draggable: true,
    focusOnSelect: true,
    accessibility: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 800,
        settings: "unslick",
      }
    ]
  };

  return (
    <Layout>
      <SEO title={props.data.contentfulProject.projectTitle} />
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
          <Slider {...settings}>
            {props.data.contentfulProject.images.map(({ id, fluid }) => (
              <div
                className="img-wrapper"
                key={id}
                style={{
                  height: `calc(100vh - 80px)`,
                  width: `calc(${fluid.aspectRatio} * (100vh - 80px))`,
                }}
              >
                <Img
                  fluid={fluid}
                  className="slider-img"
                />
              </div>
            ))}
          </Slider>
         {/* <h2
            style={{
              position: `fixed`,
              left: `20px`,
              bottom: `42px`,
              fontSize: `16px`,
              fontFamily: `ogg`,
              color: `#212121`,
              margin: `0`,
              fontWeight: `normal`,
            }}
          >
            {props.data.contentfulProject.projectTitle}
          </h2>
          <h3
            style={{
              position: `fixed`,
              left: `20px`,
              bottom: `20px`,
              fontSize: `12px`,
              fontFamily: `ogg`,
              color: `#212121`,
              margin: `0`,
              fontWeight: `normal`,
            }}
          >
            {props.data.contentfulProject.location}
          </h3>*/}
        </div>
      </div>
    </Layout>
  )
}

export default Project