import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter, IoLogoFacebook, IoMdMail } from 'react-icons/io';

import Link, { ButtonLink } from './link';
import Panel from './panel';
import PartnerLogos from './partner-logos';
import { Paragraph } from './typography';
import EventsPanel from './events-panel';

const Aside = styled.aside`
  width: 100%;
  flex: 1 0 0%;
`;

const Row = styled(Paragraph)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.units(1)};
`;

const SidePanel = styled(Panel)`
  margin: ${({ theme }) => theme.spacing.units(4)} 0;

  & :first-child {
    margin-top: 0;
    ${({ theme }) => theme.media.medium`margin-top: ${theme.spacing.units(4)};`}
    ${({ theme }) => theme.media.small`margin-top: ${theme.spacing.units(4)};`}
  }
`;

const ContactLink = styled(Link)`
  ${({ theme }) => `margin-left: ${theme.spacing.units(1)};`}
`;

export default function Sidebar() {
  return (
    <Aside>
      <SidePanel title="Contact">
        <Row>
          <IoMdMail />
          <ContactLink href="mailto:info@friendsofchitambo.org.uk">info@friendsofchitambo.org.uk</ContactLink>
        </Row>
        <Row>
          <IoLogoFacebook />
          <ContactLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/friendsofchitambo/">@friendsofchitambo</ContactLink>
        </Row>
        <Row>
          <IoLogoTwitter />
          <ContactLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/FriendsChitambo">@FriendsChitambo</ContactLink>
        </Row>
      </SidePanel>
      <SidePanel title="Donate">
        <Paragraph>Thank you for your support!</Paragraph>
        <ButtonLink
          external
          to="http://www.crowdfunder.co.uk/breathe-life-into-chitambo"
          label="Donate with Crowdfunder"
        />
      </SidePanel>
      <SidePanel title="Upcoming Events">
        <EventsPanel />
      </SidePanel>
      <PartnerLogos />
    </Aside>
  );
}
