import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">User Dashboard</Link>
          </div>
          <div className="flex">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Home</Link>
            <Link to="/add-user" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Add User</Link>
            <Link to="/manage-users" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Manage Users</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}