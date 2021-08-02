import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WordImg from "../images/wordmark.svg"
import InfoImg from "../images/about-img.png"

const Information = () => (
  <Layout>
    <Seo title="Information" />
    <div className="info-text">
      <div className="info-content">
        <img 
          src={WordImg}
          alt="Studio Antoine Logo"
          style={{
            position: `relative`,
            top: `0px`,
            left: `0px`,
            width: `175px`,
            margin: `0`,
          }}
        />
        <p
          style={{
            position: `relative`,
            left: `0px`,
            width: `100%`,
            margin: `0`,
            marginTop: `30px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          Antoine Ratigan who is half English and half French, has been living in Mexico for the past 10 years.  Born and raised in London where he studied Architecture, he moved to Paris in his early twenties to work in the world of Fashion where he finished being the worldwide merchandising director at Yves Saint Laurent headquarters in Paris now better known as SAINT LAURENT, a post he held with great success for 5 years at the luxury brand.
        </p>
        <p
          style={{
            position: `relative`,
            left: `0px`,
            width: `100%`,
            marginTop: `20px`,
            marginBottom: `20px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          His discovery of Mexico proved to be life changing, as after falling in love with the Mexican culture as a whole and the country made him decide to make Mexico the place he now calls home for the past ten years.
        </p>
        <p
          style={{
            position: `relative`,
            left: `0px`,
            width: `100%`,
            marginTop: `20px`,
            marginBottom: `20px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          With his well travelled eye,  multi cultural heritage, his deep understanding of high end needs as a whole and his passions for architecture and design, Antoine Ratigan partnered up with Miguel Angel Aragones world renowned Mexican Architect to create a new hotel group in Mexico eight years ago called Grupo Encanto. Taking over and revamping The Hotel Encanto Acapulco became the number one hotel on tripadvisor over the Banyan Tree after only 6 months of rebranding and reinventing the experience for the guests. This gave them the boost to start on the full invention and creation of the Mar Adentro Hotel Cabos now the Viceroy Los Cabos. 
        </p>
        <p
          style={{
            position: `relative`,
            left: `0px`,
            width: `100%`,
            marginTop: `20px`,
            marginBottom: `20px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          Once this last property came to market Antoine Ratigan created his unique design and artistic direction agency specialized in commercial projects and private homes which offers his clients a one step experience on the complete project process. Aligning all his passions and experience, Studio Antoine offers a complete artistic direction, spanning from the architectural collaborations to the full interior design as well as the branding, marketing and operations of the properties and projects.
        </p>
        <p
          style={{
            position: `relative`,
            left: `0px`,
            width: `100%`,
            marginTop: `20px`,
            marginBottom: `20px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          His deep love and admiration of the Mexican hand and craft makes him endeavour to bespoke all details with one of the most creative portfolios this country can offer, creating and collaborating with the best architects, carpenters, ceramists, silversmiths, weavers, potters, muralists, branding agencies and the list continues, to deliver a project where all details are looked after but moreover where each detail has a story behind it making each project a book worth reading and discovering.
        </p>
        <p
          style={{
            position: `relative`,
            left: `0px`,
            width: `100%`,
            marginTop: `20px`,
            marginBottom: `80px`,
            fontFamily: `ogg`,
            fontSize: `12px`,
            lineHeight: `18px`,
          }}
        >
          Working with Antoine Ratigan makes you understand how amazing Mexico is on the creative and artistic scene and will definitely put your project on the map to living something different and profound to the core.
        </p>
      </div>
      <img 
        className="info-img"
        src={InfoImg}
        alt="Information Image"
      />
    </div>
  </Layout>
)

export default Information