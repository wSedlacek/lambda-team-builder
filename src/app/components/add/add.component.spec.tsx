import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { Add } from './add.component';
import { TeamMember } from '../../models/TeamMember';

it('should run the handleSubmit callback', async () => {
  let data: TeamMember[] = [];

  const callback = (member: TeamMember) => {
    data.push(member);
  };
  const { baseElement, getByText } = render(<Add handleSubmit={callback} />);

  const input = baseElement.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
  fireEvent.input(input[0], { target: { value: dave.name } });
  fireEvent.input(input[1], { target: { value: dave.email } });
  fireEvent.input(input[2], { target: { value: dave.role } });
  fireEvent.submit(getByText('Add'));

  expect(data[0].name).toEqual(dave.name);
  expect(data[0].email).toEqual(dave.email);
  expect(data[0].role).toEqual(dave.role);
});
