import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <h1>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
