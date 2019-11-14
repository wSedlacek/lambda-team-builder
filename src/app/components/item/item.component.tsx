import React from 'react';
import './item.component.scss';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';

import { TeamMember } from '../../models/TeamMember';
import { Edit } from '../edit/edit.component';

type ItemProps = {
  member: TeamMember;
  handleEdit: (id: string | undefined, member: TeamMember) => void;
};

export const Item = (props: ItemProps) => {
  const [editing, setEditing] = React.useState<boolean>(false);

  const { id, name, role, email } = props.member;
  return (
    <Card className='Item'>
      {!editing && (
        <div>
          <Typography variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography gutterBottom variant='subtitle1' component='h3'>
            {role}
          </Typography>
          <Typography variant='subtitle2' component='h4'>
            {email}
          </Typography>

          <IconButton className='edit-btn' onClick={() => setEditing(true)}>
            <EditIcon />
          </IconButton>
        </div>
      )}
      {editing && (
        <Edit
          member={props.member}
          handleSubmit={member => {
            setEditing(false);
            props.handleEdit(id, member);
          }}
        />
      )}
    </Card>
  );
};
