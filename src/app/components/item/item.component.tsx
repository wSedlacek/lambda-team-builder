import React from 'react';
import './item.component.scss';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { TeamMember } from '../../models/TeamMember';

type ItemProps = {
  member: TeamMember;
};

export const Item = (props: ItemProps) => {
  return (
    <Card className='Item'>
      <Typography variant='h5' component='h2'>
        {props.member.name}
      </Typography>
    </Card>
  );
};
