const path = require('path');

const pathToBlogTemplate = path.resolve('./src/components/blog-post.jsx');
const pathToPageTemplate = path.resolve('./src/components/content-page.jsx');

const createBlogEntryPages = (graphql, createPage) => new Promise(resolve => graphql(`
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
    component: pathToBlogTemplate,
    context: {
      slug: node.slug,
      postId: node.id,
    },
  }),
  );
  resolve();
}));

const createContentPages = (graphql, createPage) => new Promise(resolve => graphql(`
    {
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
  result.data.allContentfulPage.edges.forEach(({ node }) => createPage({
    path: node.slug,
    component: pathToPageTemplate,
    context: {
      slug: node.slug,
      pageId: node.id,
    },
  }),
  );
  resolve();
}));

exports.createPages = ({ graphql, actions: { createPage } }) => Promise.all([
  createBlogEntryPages(graphql, createPage),
  createContentPages(graphql, createPage),
]);
