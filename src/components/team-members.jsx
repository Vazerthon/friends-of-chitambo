import React, { Fragment } from 'react';

import { Heading } from './typography';
import Team from '../queries/team';

function TeamMembers() {
  return (
    <Fragment>
      <Heading>Friends of Chitambo Team</Heading>
      <Team
        renderChildren={(team) => team.map(member => (
          <div>{member.name}</div>
        ))}
      />
    </Fragment>
  );
}

export default TeamMembers;
