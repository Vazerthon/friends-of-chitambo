import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Paragraph } from './typography';
import { InternalLink } from './link';

function EventsPanel({ url, date, title }) {
  return (
    <InternalLink to={url} tabIndex="0">
      <Paragraph colour="secondary">
        {date}
        {' - '}
        {title}
      </Paragraph>
    </InternalLink>
  );
}

const mapToNodes = (allContentfulEvent) => allContentfulEvent.edges.map(({ node }) => node);
const dateMoreThanToday = (event) => new Date(event.date) > new Date();

function ConnectedEventsPanel() {
  const { allContentfulEvent } = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { fields: date, order: DESC }) {
        edges {
          node {
            ...EventData
          }
        }
      }
    }
  `);

  const [next] = mapToNodes(allContentfulEvent).filter(dateMoreThanToday);

  return next ? (
    <EventsPanel
      url={`event/${next.slug}`}
      date={next.dateString}
      title={next.title}
    />
  ) : (
    <Paragraph>No upcoming events, please check back soon.</Paragraph>
  );
}

export default ConnectedEventsPanel;

EventsPanel.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
