import React from 'react';

import Layout from '../components/layout';
import { Heading, Paragraph } from '../components/typography';
import Link from '../components/link';

const NotFoundPage = () => (
  <Layout>
    <Heading>
      NOT FOUND
    </Heading>
    <Paragraph>
      Oh no! This page cannot be found :-(
      {' '}
      <Link href="/">Click here to go back to the home page.</Link>
    </Paragraph>
  </Layout>
);

export default NotFoundPage;
