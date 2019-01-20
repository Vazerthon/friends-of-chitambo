import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter, IoLogoFacebook } from 'react-icons/io';

import Link from './link';
import Panel from './panel';
import PartnerLogos from './partner-logos';
import { Paragraph } from './typography';
import { ButtonLink } from './link';

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

export default function Sidebar() {
  return (
    <Aside>
      <SidePanel title="Contact">
        <Row>
          email: <Link href="mailto:info@friendsofchitambo.org.uk">info@friendsofchitambo.org.uk</Link>
        </Row>
        <Row>
          tel (UK): <Link href="tel:00441316509382">+44 (0)131 650 9382</Link>
        </Row>
        <Row>
          tel (Zambia): <Link href="tel:0026977571685">+26 (0)97 757 1685</Link>
        </Row>
        <Row>
          <IoLogoFacebook />
          <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/friendsofchitambo/">@friendsofchitambo</Link>
        </Row>
        <Row>
          <IoLogoTwitter />
          <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/FriendsChitambo">@FriendsChitambo</Link>
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
      <PartnerLogos />
    </Aside>
  );
};
