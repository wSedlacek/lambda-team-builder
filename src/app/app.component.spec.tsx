import React from 'react';

import { render, act } from '@testing-library/react';

import { App } from './app.component';
import { TeamService } from './services/team.service';

it('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});

it('can display items', () => {
  const { baseElement } = render(<App />);

  act(() => {
    TeamService.addMember({ id: '', name: 'Dave' });
  });

  expect(baseElement.querySelector('.Item')).toBeInTheDocument();
});
