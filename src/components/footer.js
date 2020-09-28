import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyle from "./footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyle.footer}>
      <p>Create by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
