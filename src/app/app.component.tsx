import React from 'react';
import './app.component.scss';

import { TeamService } from './services/team.service';
import { Item } from './components/item/item.component';

import { TeamMember } from './models/TeamMember';

export const App = () => {
  const [members, setMembers] = React.useState<TeamMember[]>([]);

  React.useEffect(() => setMembers(TeamService.getMembers()), []);

  return (
    <div>
      {members.map(member => (
        <Item member={member} key={member.id} />
      ))}
    </div>
  );
};
