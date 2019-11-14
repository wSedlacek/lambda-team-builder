import '@testing-library/jest-dom/extend-expect';
import { TeamMember } from './app/models/TeamMember';

export const dave = new TeamMember({
  name: 'Dave',
  email: 'test@testing.com',
  role: 'Member',
});
