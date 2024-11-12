import { User } from '../types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    createdAt: new Date('2024-01-15').toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'active',
    profilePhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    createdAt: new Date('2024-02-01').toISOString(),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'User',
    status: 'inactive',
    profilePhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    createdAt: new Date('2024-02-15').toISOString(),
  },
];