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
          top: `0`,
          left: `0`,
          minHeight: `calc(100vh - 80px)`,
          width: `25vw`,
          background: `#ffffff`,
        }}
      >
        <img 
          src={WordImg}
          alt="Studio Antoine Logo"
          style={{
            position: `relative`,
            top: `20px`,
            left: `20px`,
            width: `175px`,
            margin: `0`,
          }}
        />
        <p
          style={{
            position: `relative`,
            left: `20px`,
            width: `calc(25vw - 40px)`,
            margin: `0`,
            marginTop: `30px`,
            fontFamily: `relativebook`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          STUDIO ANTOINE<br/>
          Alumnos 19, Casa 3.<br/>
          San Miguel Chapultepec<br/>
          ll Secc. Miguel Hidalgo<br/>
          CDMX, 11850
        </p>
        <p
          style={{
            position: `relative`,
            left: `20px`,
            width: `calc(25vw - 40px)`,
            marginTop: `20px`,
            marginBottom: `20px`,
            fontFamily: `relativebook`,
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
    </div>
  </Layout>
)

export default Contact
