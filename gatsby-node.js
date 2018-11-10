const path = require('path');

exports.createPages = ({ graphql, actions: { createPage } }) => new Promise((resolve) => {
  graphql(`
  {  
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/components/blog-post.jsx'),
      context: {
        slug: node.slug,
        postId: node.id,
      },
    }));
    resolve();
  });
});
