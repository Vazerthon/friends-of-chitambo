import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter, IoLogoFacebook, IoMdMail } from 'react-icons/io';
import { navigate } from 'gatsby';

import Link, { ButtonLink } from './link';
import Panel from './panel';
import Calendar from './calendar';
import PartnerLogos from './partner-logos';
import { Paragraph } from './typography';

import Events from '../queries/events';

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
  padding: ${({ theme }) => theme.spacing.units(2)};

  & :first-child {
    margin-top: 0;
    ${({ theme }) => theme.media.medium`margin-top: ${theme.spacing.units(4)};`}
    ${({ theme }) => theme.media.small`margin-top: ${theme.spacing.units(4)};`}
  }
`;

const ContactLink = styled(Link)`
  ${({ theme }) => `margin-left: ${theme.spacing.units(1)};`}
`;

const toCalendarEvent = event => ({
  date: event.date,
  onClick: () => navigate(`event/${event.slug}`),
});

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
          to="https://www.totalgiving.co.uk/charity/friends-of-chitambo-scio"
          label="Donate with TotalGiving"
        />
      </SidePanel>
      <SidePanel title="Events">
        <Events
          renderChildren={events => (
            <Calendar
              today={new Date()}
              events={events.map(toCalendarEvent)}
            />
          )}
        />
      </SidePanel>
      <PartnerLogos />
    </Aside>
  );
}
