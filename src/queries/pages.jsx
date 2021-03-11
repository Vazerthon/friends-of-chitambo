import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulPage.edges.map(({ node }) => node);
const filterToSingleNode = id => nodes => nodes.find(n => n.id === id);
const identity = x => x;

export default function Pages({ renderChildren, pageId }) {
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
                  coverImage {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      formats: [AUTO, WEBP]
                    )
                  }
                  body {
                    body
                  }
                  gallery {
                    id
                    title
                    image: gatsbyImageData(
                      width: 300
                      layout: FIXED
                      formats: [AUTO, WEBP]
                    )
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

Pages.propTypes = {
  renderChildren: PropTypes.func.isRequired,
  pageId: PropTypes.string,
};

Pages.defaultProps = {
  pageId: undefined,
};
