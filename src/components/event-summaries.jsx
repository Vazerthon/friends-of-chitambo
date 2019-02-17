import React, { Fragment } from 'react';

import { Heading } from './typography';
import Events from '../queries/events';
import SummaryCard from './summary-card';

function EventSummaries() {
  return (
    <Fragment>
      <Heading>Events</Heading>
      <Events
        renderChildren={(events) => events.map(event => (
          <SummaryCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            url={`event/${event.slug}`}
          />
        ))}
      />
    </Fragment>
  );
}

export default EventSummaries;
