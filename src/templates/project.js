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
        }
      }
    }
  }
`

const Project = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO title={props.data.contentfulProject.projectTitle} />
      <Link to="/projects/">Projects</Link>
      <div className="content">
        <h1>{props.data.contentfulProject.projectTitle}</h1>
          <Slider {...settings}>
            {props.data.contentfulProject.images.map(({ fluid, id }) => (
              <Img
            key={id}
            fluid={fluid}
            className="images"
          />
            ))}
          </Slider>

          

      </div>
    </Layout>
  )
}

export default Project