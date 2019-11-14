import * as uuid from 'uuid';

export class TeamMember {
  id?: string;
  name: string;
  email: string;
  role: string;

  constructor(obj?: TeamMember) {
    this.id = uuid.v1();
    this.name = obj ? obj.name : '';
    this.email = obj ? obj.email : '';
    this.role = obj ? obj.role : '';
  }
}
