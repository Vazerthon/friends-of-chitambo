import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulPartner.edges.map(({ node }) => node);

export default function Partners({ renderChildren }) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulPartner {
              edges {
                node {
                  id
                  website
                  organisation
                  logo {
                    gatsbyImageData(
                      width: 100
                      layout: FIXED
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
            }
          }`
        }
      render={data => renderChildren(mapToNodes(data))}
    />
  );
}

Partners.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
