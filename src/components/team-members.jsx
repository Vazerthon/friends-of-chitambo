import React, { Fragment } from 'react';

import { Heading } from './typography';
import Team from '../queries/team';
import TeamMember from './team-member';

function TeamMembers() {
  return (
    <Fragment>
      <Heading>Friends of Chitambo Team</Heading>
      <Team
        renderChildren={(team) => team.map(member => (
          <TeamMember
            key={member.id}
            name={member.name}
            location={member.location}
            biography={member.biography.biography}
            picture={member.picture}
          />
        ))}
      />
    </Fragment>
  );
}

export default TeamMembers;
