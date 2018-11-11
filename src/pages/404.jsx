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
      The page you're looking for doesn't exist. <Link href="/">Click here to go back to the home page.</Link>
    </Paragraph>
  </Layout>
);

export default NotFoundPage;
