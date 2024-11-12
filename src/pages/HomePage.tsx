import { useLocation } from 'react-router-dom';
import { UserCard } from '../components/UserCard';
import { useUsers } from '../hooks/useUsers';

export function HomePage() {
  const { users } = useUsers();
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {message && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
          {message}
        </div>
      )}
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">User Profiles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}