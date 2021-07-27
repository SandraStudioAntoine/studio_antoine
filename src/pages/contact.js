import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WordImg from "../images/wordmark.svg"
import GoogleMapReact from 'google-map-react';

const Contact = () => {
  const mapOptions = {
    styles: [
      {
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f5f5f2"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.attraction",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.place_of_worship",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.school",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.sports_complex",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.local",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "color": "#71c8d4"
              }
          ]
      },
      {
          "featureType": "landscape",
          "stylers": [
              {
                  "color": "#e5e8e7"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "color": "#8ba129"
              }
          ]
      },
      {
          "featureType": "road",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi.sports_complex",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#c7c7c7"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "color": "#a0d3d3"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "color": "#91b65d"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "gamma": 1.51
              }
          ]
      },
      {
          "featureType": "road.local",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.government",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.local",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road"
      },
      {
          "featureType": "road"
      },
      {},
      {
          "featureType": "road.highway"
      },
    ],
    zoomControl: false,
    fullscreenControl: false,
  };

  const Marker = () => {
    return (
      <div
        className="marker-map"
        style={{
          height: `20px`,
          width: `20px`,
          borderRadius: `10px`,
          backgroundColor: `#212121`,
        }}
      ></div>
    );
  };

  return (

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

      <div
        className="mapGoogle"
        style={{
          border: `none`,
          width: `calc(50vw - 120px)`,
          height: `calc(100vh - 240px)`,
          position: `fixed`,
          top: `160px`,
          right: `80px`,
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDi8Ijv1DcNQeOB9QoU-Lln_jot0CzdxJE',
          }}
          center={[19.41504720565826, -99.18189340261033]}
          zoom={16}
          options={mapOptions}
          backgroundColor={'none'}
        >
          <Marker lat={19.41504720565826} lng={-99.18189340261033} text="My Marker"></Marker>
        </GoogleMapReact>
      </div>
    </div>
  </Layout>
  )
}

export default Contact
