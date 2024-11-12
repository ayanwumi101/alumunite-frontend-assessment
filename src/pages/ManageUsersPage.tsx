import { useUsers } from '../hooks/useUsers';
import { UserCard } from '../components/UserCard';

export function ManageUsersPage() {
  const { users } = useUsers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Users</h1>
      
      <div className="space-y-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}