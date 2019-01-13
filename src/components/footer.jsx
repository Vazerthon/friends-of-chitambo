import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { IoLogoTwitter, IoLogoFacebook } from 'react-icons/io';

import Logo from './logo';
import { Paragraph } from './typography';

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
  `}
  
  ${({ theme }) => theme.media.small`
    padding-left: ${theme.spacing.units(2)};
    padding-right: ${theme.spacing.units(2)};
  `};
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
            <IconButton color="secondary" href="https://www.facebook.com/friendsofchitambo/">
              <IoLogoFacebook />
            </IconButton>
            <IconButton color="secondary" href="https://twitter.com/FriendsChitambo">
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
