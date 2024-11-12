export type UserRole = 'Admin' | 'User';
export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  profilePhoto: string;
  createdAt: string;
}