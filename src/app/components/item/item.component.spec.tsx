import React from 'react';
import { render } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { Item } from './item.component';

it('shows member data', () => {
  const callback = () => {};
  const { getByText } = render(<Item member={dave} handleEdit={callback} />);
  expect(getByText(dave.name)).toBeInTheDocument();
  expect(getByText(dave.email)).toBeInTheDocument();
  expect(getByText(dave.role)).toBeInTheDocument();
});
