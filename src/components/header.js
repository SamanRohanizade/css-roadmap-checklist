import React from "react"
import style from "./header.module.scss"

const Header = ({ title, subtitle, headerImage }) => (
  <header className={style.header}>
    <div className={style.headerImg}>
      {headerImage ?
        <img src={headerImage} alt={title} />
        : null
      }
    </div>
    <h1 className={style.headerTitle}>{title}</h1>
    <h2 className={style.headerSubtitle}>{subtitle}</h2>
  </header>
)

export default Header
