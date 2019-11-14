import React from 'react';

import { render, act } from '@testing-library/react';
import { dave } from '../setupTests';

import { App } from './app.component';
import { TeamService } from './services/team.service';

it('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});

it('can display items', () => {
  const { baseElement } = render(<App />);

  act(() => {
    TeamService.addMember(dave);
  });

  expect(baseElement.querySelector('.Item')).toBeInTheDocument();
});
