import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <div>Contact Page</div>
        <p>
          <a href="http://www.google.com" target="_blank">
            Google
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
