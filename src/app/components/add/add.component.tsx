import React from 'react';
import './add.component.scss';

import * as uuid from 'uuid';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import { TeamMember } from '../../models/TeamMember';

type AddProps = {
  handleSubmit: (member: TeamMember) => void;
};

export const Add = (props: AddProps) => {
  const [member, setMember] = React.useState<TeamMember>({ id: uuid.v1(), name: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (member.name) {
      props.handleSubmit(member);
      setMember({ id: uuid.v1(), name: '' });
    }
  };

  return (
    <Card className='Add'>
      <form onSubmit={handleSubmit}>
        <TextField
          role='input'
          name='name'
          label='Name'
          value={member.name}
          onChange={handleChange}
        />
        <Button variant='contained' color='primary' type='submit'>
          Add
        </Button>
      </form>
    </Card>
  );
};
