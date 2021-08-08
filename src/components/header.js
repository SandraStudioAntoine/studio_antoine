import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IconImg from "../images/icon.svg"
import MenuImg from "../images/menu.svg"
import CloseImg from "../images/close.svg"

const Header = ({ siteTitle }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const showNav = () => setToggleNav(!toggleNav);

  return (
    <header
    style={{
      position: `fixed`,
      zIndex: `100`,
      top: `0`,
      left: `0`,
      height: `80px`,
      width: `100vw`,
      background: `#ffffff`,
      boxShadow: `0 2px 4px rgba(33,33,33,.2)`,
    }}
  >
    {toggleNav && (
      <img 
        src={CloseImg}
        alt="Menu Close"
        style={{
          position: `absolute`,
          top: `50%`,
          left: `20px`,
          transform: `translateY(-50%)`,
          width: `20px`,
          cursor: `pointer`,
        }}
        onClick={showNav}
      />
    )}

    {toggleNav && (
      <ul>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/information/">Information</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/archive/">Archive</Link>
        </li>
      </ul>
    )}

    {!toggleNav && (
      <img 
        src={MenuImg}
        alt="Menu Open"
        style={{
          position: `absolute`,
          top: `50%`,
          left: `20px`,
          transform: `translateY(-50%)`,
          width: `20px`,
          cursor: `pointer`,
        }}
        onClick={showNav}
      />
    )}
    <Link to="/">
      <img
        className="header-logo"
        src={IconImg}
        alt="Studio Antoine Logo"
      />
    </Link>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
