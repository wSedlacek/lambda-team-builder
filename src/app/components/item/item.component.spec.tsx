import React from 'react';
import { render } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { Item } from './item.component';

it('shows member dave', () => {
  const { getByText } = render(<Item member={dave} />);
  expect(getByText(dave.name)).toBeInTheDocument();
  expect(getByText(dave.email)).toBeInTheDocument();
  expect(getByText(dave.role)).toBeInTheDocument();
});
