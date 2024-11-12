import { AddUserForm } from '../components/AddUserForm';
import { useUsers } from '../hooks/useUsers';

export function AddUserPage() {
  const { addUser } = useUsers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New User</h1>
      <AddUserForm onSubmit={addUser} />
    </div>
  );
}