import { TeamService } from './team.service';
import { TeamMember } from '../models/TeamMember';

it('should update subscribers', () => {
  let data: TeamMember[] = [];
  const dave: TeamMember = { id: '0', name: 'Dave' };
  const callback = (member: TeamMember[]) => {
    data = member;
  };

  TeamService.subscribe(callback);
  TeamService.addMember(dave);

  expect(data[0]).toBe(dave);
});
