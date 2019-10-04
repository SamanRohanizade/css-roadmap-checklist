import React from "react"
import styles from "./header.module.scss"

const Header = ({ title, subtitle, headerImage }) => (
  <header className={styles.header}>
    <div className={styles.headerImg}>
      {headerImage ?
        <img src={headerImage} alt={title} />
        : null
      }
    </div>
    <h1 className={styles.headerTitle}>{title}</h1>
    <h2 className={styles.headerSubtitle}>{subtitle}</h2>
  </header>
)

export default Header
