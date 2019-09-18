import React from 'react';
import { render } from '@testing-library/react';

import { App } from './app.component';

it('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});

it('has items', () => {
  const { baseElement } = render(<App />);
  expect(baseElement.querySelector('.Item')).toBeInTheDocument();
});
