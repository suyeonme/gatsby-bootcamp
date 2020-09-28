import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import Layout from "../components/layout"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge, i) => {
            return (
              <li key={i} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
