import { TeamMember } from '../models/TeamMember';

export class TeamService {
  private static readonly members: TeamMember[] = [
    {
      id: '0',
      name: 'Dave',
    },
  ];

  public static getMembers() {
    return this.members;
  }
}
