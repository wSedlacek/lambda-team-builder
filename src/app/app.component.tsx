import React from 'react';
import './app.component.scss';

import { Add } from './components/add/add.component';
import { Item } from './components/item/item.component';
import { TeamService } from './services/team.service';

import { TeamMember } from './models/TeamMember';

export const App = () => {
  const [members, setMembers] = React.useState<TeamMember[]>([]);

  React.useEffect(() => {
    const subscription = TeamService.subscribe(setMembers);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <Add handleSubmit={member => TeamService.addMember(member)} />
      {members.map(member => (
        <Item member={member} key={member.id} />
      ))}
    </div>
  );
};
