import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WordImg from "../images/wordmark.svg"
import InfoImg from "../images/info-img.jpg"

const Information = () => (
  <Layout>
    <Seo title="Information" />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum finibus ipsum non condimentum. Ut a pellentesque metus. Suspendisse pellentesque mattis sagittis. Nulla facilisi. Proin tellus lacus, iaculis et lacus vel, feugiat facilisis neque. Pellentesque tempus malesuada sapien ut malesuada. Donec ac fringilla tortor. Praesent eu felis non nisl molestie efficitur. Sed convallis pulvinar ex, quis eleifend orci aliquam eu. Curabitur auctor ut risus sed dictum. Suspendisse sit amet efficitur risus, id ultrices libero. Aliquam sit amet augue eu dui gravida pulvinar. Vivamus felis enim, dapibus sed vestibulum id, pretium nec ipsum. Praesent placerat nisl ac mauris imperdiet ornare. Suspendisse faucibus quam sed nibh interdum pharetra.
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
          Cras et ante ornare, sodales felis ac, laoreet tortor. Phasellus et efficitur quam. Quisque ullamcorper, nibh eu posuere tristique, lectus tellus posuere nibh, a dignissim urna nulla vel tortor. Duis lorem massa, egestas id accumsan vel, tempor vel leo. Donec cursus et velit eget gravida. Duis venenatis turpis vitae pharetra pulvinar. Nunc leo nunc, efficitur et lacus nec, lobortis scelerisque tortor. Sed ullamcorper ac mauris quis euismod. Aenean non lorem a sapien convallis luctus sed ac risus. Maecenas ut urna id erat luctus iaculis. Maecenas ut nibh at nulla tempus posuere. Donec quam lorem, eleifend sit amet lacus nec, scelerisque faucibus lacus. Pellentesque faucibus nunc urna, eget interdum dui dapibus a. Vivamus a varius diam, sit amet posuere diam. Cras aliquet dapibus eros eget commodo. Mauris eu pulvinar leo, eget ultrices nunc.
        </p>
      </div>
      <img 
        src={InfoImg}
        alt="Information Image"
        style={{
          position: `fixed`,
          top: `80px`,
          right: `0`,
          height: `calc(100vh - 80px)`,
          width: `75vw`,
          objectFit: `cover`,
          objectPosition: `0% 100%`,
        }}
      />
    </div>
  </Layout>
)

export default Information