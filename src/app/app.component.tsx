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
      <Add handleAdd={member => TeamService.addMember(member)} />
      <h1 className='title'> Team Members </h1>
      {members.map(member => (
        <Item
          key={member.id}
          member={member}
          handleEdit={(id, member) => TeamService.editMember(id, member)}
        />
      ))}
    </div>
  );
};
