import { BehaviorSubject } from 'rxjs';

import { TeamMember } from '../models/TeamMember';

export class TeamService {
  public static members = new BehaviorSubject<TeamMember[]>([]);

  public static addMember(member: TeamMember) {
    this.members.next([...this.members.getValue(), member]);
  }

  public static editMember(id: string | undefined, member: TeamMember) {
    const members = this.members.getValue();
    const indexToEdit = members.findIndex(member => member.id === id);
    members[indexToEdit] = member;
    this.members.next([...members]);
  }

  public static subscribe(setMembers: (member: TeamMember[]) => void) {
    return this.members.subscribe(setMembers);
  }
}
