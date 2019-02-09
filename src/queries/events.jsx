import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulEvent.edges.map(({ node }) => node);
const filterToSingleNode = id => nodes => nodes.find(n => n.id === id);
const identity = x => x;

export default function Events({ renderChildren, eventId }) {
  const filter = eventId ? filterToSingleNode(eventId) : identity;
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulEvent {
              edges {
                node {
                  id
                  title
                  slug
                  date
                  description
                  coverImage {
                    fluid(maxWidth: 2000) {
                      ...GatsbyContentfulFluid_tracedSVG
                    }
                  }
                  body {
                    body
                  }
                  gallery {
                    id
                    title
                    fixed(width: 300) {
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

Events.propTypes = {
  renderChildren: PropTypes.func.isRequired,
  eventId: PropTypes.string,
};

Events.defaultProps = {
  eventId: undefined,
};
