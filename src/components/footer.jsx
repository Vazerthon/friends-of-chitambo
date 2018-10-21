import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { IoLogoTwitter, IoLogoFacebook } from 'react-icons/io';

import Logo from './logo';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colour.neutral.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.colour.secondary} 0 6px 16px;
  padding-top: ${({ theme }) => theme.spacing.units(4)};
  padding-bottom: ${({ theme }) => theme.spacing.units(4)};
  padding-left: ${({ theme }) => theme.spacing.units(20)};
  padding-right: ${({ theme }) => theme.spacing.units(20)};

  ${({ theme }) => theme.media.medium`
    padding-left: ${theme.spacing.units(10)};
    padding-right: ${theme.spacing.units(10)};
  `} ${({ theme }) => theme.media.small`
    padding-left: ${theme.spacing.units(2)};
    padding-right: ${theme.spacing.units(2)};
  `};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

function Footer() {
  return (
    <Container>
      <Row>
        <Logo size="small" text="right" />
        <Col>
          Follow us!
          <Row>
            <IconButton color="secondary" href="https://www.facebook.com/friendsofchitambo/">
              <IoLogoFacebook />
            </IconButton>
            <IconButton color="secondary" href="https://twitter.com/FriendsChitambo">
              <IoLogoTwitter />
            </IconButton>
          </Row>
        </Col>
      </Row>

      <Typography component="span">
        Friends of Chitambo is registered in Scotland as a charity, no. SCO44337. ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        All rights reserved
      </Typography>
    </Container>
  );
}

export default Footer;
