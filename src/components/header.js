import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IconImg from "../images/icon.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `fixed`,
      top: `0`,
      left: `0`,
      height: `80px`,
      width: `100vw`,
      background: `#ffffff`,
      boxShadow: `0 2px 4px rgba(33,33,33,.2)`,
      marginBottom: `1.45rem`,
    }}
  >
    <img 
      src={IconImg}
      alt="Studio Antoine Logo"
      style={{
        position: `relative`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%,-50%`,
        height: `40px`,
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
