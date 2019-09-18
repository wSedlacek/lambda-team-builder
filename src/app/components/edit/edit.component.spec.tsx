import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { Edit } from './edit.component';
import { TeamMember } from '../../models/TeamMember';

it('should run the handleSubmit callback', async () => {
  let data: TeamMember[] = [];

  const callback = (member: TeamMember) => {
    data.push(member);
  };
  const { baseElement, getByText } = render(<Edit handleSubmit={callback} />);

  const input = baseElement.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
  fireEvent.input(input[0], { target: { value: dave.name } });
  fireEvent.input(input[1], { target: { value: dave.email } });
  fireEvent.input(input[2], { target: { value: dave.role } });
  fireEvent.submit(getByText('Edit'));

  expect(data[0].name).toEqual(dave.name);
  expect(data[0].email).toEqual(dave.email);
  expect(data[0].role).toEqual(dave.role);
});
