import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import headerImage from 'src/images/checklist.svg'
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        title={data.site.siteMetadata.title}
        headerImage={headerImage}
        subtitle="Complete each step of this checklist for CSS Mastery" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          
        </footer>
      </div>
    </>
  )
}

export default Layout
