import React from 'react';
import { render } from '@testing-library/react';

import { Item } from './item.component';

it('shows member dave.', () => {
  const dave = {
    id: '0',
    name: 'Dave',
  };

  const { getByText } = render(<Item member={dave} />);
  expect(getByText(dave.name)).toBeInTheDocument();
});
