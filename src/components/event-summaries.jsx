import React from 'react';

import Events from '../queries/events';
import SummaryCard from './summary-card';

function EventSummaries() {
  return (
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
  );
}

export default EventSummaries;
