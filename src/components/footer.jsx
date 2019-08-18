import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { IoLogoTwitter, IoLogoFacebook } from 'react-icons/io';

import Logo from './logo';
import { Paragraph } from './typography';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid ${({ theme }) => theme.colour.neutral.grey};
  margin-top: ${({ theme }) => theme.spacing.units(4)};
  padding: ${({ theme }) => theme.spacing.units(4)} 0;
`;

const LogoAndSocial = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.media.small`
    flex-direction: column;
  `};
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.small`
    margin-top: ${theme.spacing.units(1)}
    align-items: center;
  `};
`;

const SocialButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.media.small`
    justify-content: center;
    align-items: center;
  `};
`;

function Footer() {
  return (
    <Container>
      <LogoAndSocial>
        <Logo size="small" text="right" />
        <Social>
          Follow us!
          <SocialButtons>
            <IconButton
              color="secondary"
              href="https://www.facebook.com/friendsofchitambo/"
              aria-label="facebook"
            >
              <IoLogoFacebook />
            </IconButton>
            <IconButton
              color="secondary"
              href="https://twitter.com/FriendsChitambo"
              aria-label="twitter"
            >
              <IoLogoTwitter />
            </IconButton>
          </SocialButtons>
        </Social>
      </LogoAndSocial>

      <Paragraph>
        Friends of Chitambo is registered in Scotland as a charity, no. SCO44337. ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        All rights reserved
      </Paragraph>
    </Container>
  );
}

export default Footer;
