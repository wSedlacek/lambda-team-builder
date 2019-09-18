import React from 'react';
import './add.component.scss';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import { TeamMember } from '../../models/TeamMember';

type AddProps = {
  handleSubmit: (member: TeamMember) => void;
};

export const Add = (props: AddProps) => {
  const [member, setMember] = React.useState<TeamMember>(new TeamMember());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (member.name) {
      props.handleSubmit(member);
      setMember(new TeamMember());
    }
  };

  return (
    <Card className='Add'>
      <form onSubmit={handleSubmit}>
        <TextField
          className='input'
          fullWidth
          name='name'
          label='Name'
          value={member.name}
          onChange={handleChange}
        />
        <TextField
          className='input'
          fullWidth
          name='email'
          label='Email'
          value={member.email}
          onChange={handleChange}
        />
        <TextField
          className='input'
          fullWidth
          name='role'
          label='Role'
          value={member.role}
          onChange={handleChange}
        />
        <Button variant='contained' color='primary' type='submit'>
          Add
        </Button>
      </form>
    </Card>
  );
};
