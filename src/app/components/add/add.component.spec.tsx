import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Add } from './add.component';
import { TeamMember } from '../../models/TeamMember';

it('should run the handleSubmit callback', async () => {
  const name = 'Dave';
  let data: TeamMember[] = [];

  const callback = (member: TeamMember) => {
    data.push(member);
  };
  const { baseElement, getByText } = render(<Add handleSubmit={callback} />);

  const input = baseElement.querySelector('input') as HTMLInputElement;
  fireEvent.input(input, { target: { value: name } });
  fireEvent.submit(getByText('Add'));

  expect(data[0].name).toEqual(name);
});
