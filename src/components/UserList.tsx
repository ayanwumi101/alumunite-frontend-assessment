import { useState } from "react";
import UserCard from "./UserCard";
import UserEditModal from "./UserEditModal";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  profilePhoto: string;
}

interface UserListProps {
  users: User[];
  updateUser: (user: User) => void;
}

export default function UserList({ users, updateUser }: UserListProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleUpdateUser = (updatedUser: Partial<User>) => {
      if (selectedUser) {
        const completeUser = { ...selectedUser, ...updatedUser } as User;
        updateUser(completeUser);
        setSelectedUser(null);
      }
    };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => handleUserClick(user)}
          />
        ))}
      </div>
      {selectedUser && (
        <UserEditModal
          user={selectedUser}
          onClose={handleCloseModal}
          onUpdate={handleUpdateUser}
        />
      )}
    </div>
  );
}
