import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = (data) => data.allContentfulEvent.edges.map(({ node }) => node);
const filterToSingleNode = (id) => (nodes) => nodes.find((n) => n.id === id);
const identity = (x) => x;

export const eventFragment = graphql`
  fragment EventData on ContentfulEvent {
    id
    title
    slug
    dateFromNow: date(fromNow: true)
    dateDaysDiff: date(difference: "days")
    dateString: date(formatString: "Do MMMM yyyy")
    date
    description
    coverImage {
      image: gatsbyImageData(
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
`;

export const query = graphql`
  query {
    allContentfulEvent(sort: { fields: date, order: DESC }) {
      edges {
        node {
          ...EventData
        }
      }
    }
  }
`;

export default function Events({ renderChildren, eventId }) {
  const filter = eventId ? filterToSingleNode(eventId) : identity;
  return (
    <StaticQuery
      query={query}
      render={(data) => renderChildren(filter(mapToNodes(data)))}
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
