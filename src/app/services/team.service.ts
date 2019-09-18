import { BehaviorSubject } from 'rxjs';

import { TeamMember } from '../models/TeamMember';

export class TeamService {
  public static members = new BehaviorSubject<TeamMember[]>([]);

  public static addMember(member: TeamMember) {
    this.members.next([...this.members.getValue(), member]);
  }

  public static subscribe(setMembers: (member: TeamMember[]) => void) {
    this.members.subscribe(setMembers);
  }
}
