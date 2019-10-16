import React from 'react';

import Layout from './layout';

import EventSummaries from './event-summaries';

function EventsPage() {
  return (
    <Layout title="Events">
      <EventSummaries />
    </Layout>
  );
}

export default EventsPage;
