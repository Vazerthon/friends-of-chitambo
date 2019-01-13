import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulPage.edges.map(({ node }) => node);
const filterToSingleNode = id => nodes => nodes.find(n => n.id === id);
const identity = x => x;

export default function Blogs({ renderChildren, pageId }) {
  const filter = pageId ? filterToSingleNode(pageId) : identity;
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulPage {
              edges {
                node {
                  id
                  title
                  slug
                  menuOrder
                  description
                  body {
                    body
                  }
                  gallery {
                    id
                    title
                    fixed(width: 380) {
                      ...GatsbyContentfulFixed_tracedSVG
                    }
                  }
                }
              }
            }
          }`
        }
      render={data => renderChildren(filter(mapToNodes(data)))}
    />
  );
}

Blogs.propTypes = {
  renderChildren: PropTypes.func.isRequired,
  pageId: PropTypes.string,
};
