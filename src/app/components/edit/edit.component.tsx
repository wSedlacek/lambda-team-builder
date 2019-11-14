import React from 'react';
import './edit.component.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { TeamMember } from '../../models/TeamMember';

type EditProps = {
  text?: string;
  member?: TeamMember;
  handleSubmit: (member: TeamMember) => void;
};

export const Edit = (props: EditProps) => {
  const [member, setMember] = React.useState<TeamMember>(props.member || new TeamMember());

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
    <form className='Edit' onSubmit={handleSubmit}>
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
        {props.text || 'Edit'}
      </Button>
    </form>
  );
};
