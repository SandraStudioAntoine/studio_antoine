import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WordImg from "../images/wordmark.svg"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div
      style={{
        position: `absolute`,
        top: `80px`,
        left: `0`,
        minHeight: `calc(100vh - 80px)`,
        width: `100vw`,
      }}
    >
      <div
        style={{
          position: `absolute`,
          top: `50%`,
          left: `calc(80px + (25vw - 60px))`,
          transform: `translate(-50%,-50%)`,
        }}
      >
        <img 
          src={WordImg}
          alt="Studio Antoine Logo"
          style={{
            position: `relative`,
            top: `20px`,
            width: `175px`,
            margin: `0`,
          }}
        />
        <p
          style={{
            position: `relative`,
            margin: `0`,
            marginTop: `30px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          STUDIO ANTOINE<br/>
          Alumnos 19<br/>
          San Miguel Chapultepec<br/>
          II Secc. Miguel Hidalgo<br/>
          CDMX, 11850
        </p>
        <p
          style={{
            position: `relative`,
            marginTop: `20px`,
            marginBottom: `20px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          <a 
            href="tel:+525519275069"
            style={{
              textDecoration: `none`,
              color: `#212121`,
            }}
          >+52.55.1927.5069</a><br/>
          <a
            href="mailto:hello@studioantoine.com"
            style={{
              textDecoration: `none`,
              color: `#212121`,
            }}
          >hello@studioantoine.com</a>
        </p>
      </div>
      <iframe
        style={{
          border: `none`,
          width: `calc(50vw - 120px)`,
          height: `calc(100vh - 240px)`,
          position: `fixed`,
          top: `160px`,
          right: `80px`,
        }}
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDi8Ijv1DcNQeOB9QoU-Lln_jot0CzdxJE&q=Space+Needle,Seattle+WA">
      </iframe>
    </div>
  </Layout>
)

export default Contact
