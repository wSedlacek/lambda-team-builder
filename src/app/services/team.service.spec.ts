import { TeamService } from './team.service';

it('should have data', () => {
  expect(TeamService.getMembers()).toBeDefined();
});
