import React from 'react';
import styled from 'styled-components';

import Link from './link';
import Panel from './panel';
import { Paragraph } from './typography';

const Aside = styled.aside`
  width: 100%;
  flex: 1 0 0%;
`;

const SidePanel = styled(Panel)`
  margin: ${({ theme }) => theme.spacing.units(5)} 0;

  & :first-child {
    margin-top: 0;
    ${({ theme }) => theme.media.medium`margin-top: ${theme.spacing.units(5)};`}
    ${({ theme }) => theme.media.small`margin-top: ${theme.spacing.units(5)};`}
  }
`;

export default function Sidebar() {
  return (
    <Aside>
      <SidePanel title="Contact">
        <Paragraph>
          email: <Link href="mailto:info@friendsofchitambo.org.uk">info@friendsofchitambo.org.uk</Link>
          <br />
          tel (UK): <Link href="tel:00441316509382">+44 (0)131 650 9382</Link>
          <br />
          tel (Zambia): <Link href="tel:0026977571685">+26 (0)97 757 1685</Link>
        </Paragraph>
      </SidePanel>
    </Aside>
  );
};
