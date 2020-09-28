const path = require("path")

// 2️Generate a new page for each post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // Get markdown data
  // graphql returns promise
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create new page
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
