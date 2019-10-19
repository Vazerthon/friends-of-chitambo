import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Paragraph = styled(({ ...props }) => (
  <Typography
    {...props}
    classes={{ paragraph: 'paragraph' }}
    variant="body1"
    paragraph
  />
))`
  && {
    font-size: 1.2rem;
  }
`;

export const PageTitle = styled(({ ...props }) => (
  <Typography
    {...props}
    variant="h1"
    paragraph
  />
))`
  && {
    font-size: 1.4rem;
    margin: 0;
  }
`;

export const Title = props => <Typography paragraph variant="h3" {...props} />;
export const Heading = props => <Typography paragraph variant="h4" {...props} />;
export const SubHeading = props => <Typography paragraph variant="h5" {...props} />;
