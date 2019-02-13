const path = require('path');

const pathToEventTemplate = path.resolve('./src/components/event-page.jsx');
const pathToBlogTemplate = path.resolve('./src/components/blog-post.jsx');
const pathToPageTemplate = path.resolve('./src/components/content-page.jsx');

const createEventPages = (graphql, createPage) => new Promise(resolve => graphql(`
    {
      allContentfulEvent {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
  result.data.allContentfulEvent.edges.forEach(({ node }) => createPage({
    path: `event/${node.slug}`,
    component: pathToEventTemplate,
    context: {
      slug: node.slug,
      eventId: node.id,
    },
  }),
  );
  resolve();
}));

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
  createEventPages(graphql, createPage),
  createBlogEntryPages(graphql, createPage),
  createContentPages(graphql, createPage),
]);
