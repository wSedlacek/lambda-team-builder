import { dave } from '../../setupTests';

import { TeamService } from './team.service';
import { TeamMember } from '../models/TeamMember';

it('should update subscribers when adding', () => {
  let data: TeamMember[] = [];

  const callback = (member: TeamMember[]) => {
    data = member;
  };

  TeamService.subscribe(callback);
  TeamService.addMember(dave);

  expect(data[0]).toBe(dave);
});

it('should update subscribers when editing', () => {
  let data: TeamMember[] = [];

  const callback = (member: TeamMember[]) => {
    data = member;
  };

  TeamService.subscribe(callback);
  TeamService.addMember(dave);

  const steve = { ...dave, name: 'Steve' };
  TeamService.editMember(dave.id, steve);

  expect(data[0]).toBe(steve);
});
