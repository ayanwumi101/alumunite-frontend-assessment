import { useState, useEffect } from 'react';
import { User } from '../types/user';
import { mockUsers } from '../data/mockUsers';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : mockUsers;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user: Omit<User, 'id' | 'createdAt'>) => {
    const newUser: User = {
      ...user,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setUsers((prev) => [...prev, newUser]);
    return newUser;
  };

  return { users, addUser };
};