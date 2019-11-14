import React from 'react';
import './add.component.scss';

import Card from '@material-ui/core/Card';

import { Edit } from '../edit/edit.component';
import { TeamMember } from '../../models/TeamMember';

type AddProps = {
  handleAdd: (member: TeamMember) => void;
};

export const Add = (props: AddProps) => {
  return (
    <Card className='Add'>
      <Edit handleSubmit={props.handleAdd} text='Add' />
    </Card>
  );
};
