import { Users, UserPlus, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                isActive('/') 
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            
            <Link
              to="/add-user"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                isActive('/add-user')
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </Link>
            
            <Link
              to="/manage-users"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                isActive('/manage-users')
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Manage Users
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}