import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import SuccessMessage from "./components/SuccessMessage";
import mockUsers from "./data/mockUsers.json";

export default function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : mockUsers;
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser: any) => {
    setUsers([...users, newUser]);
    setSuccessMessage("User added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const updateUser = (updatedUser: any) => {
    setUsers(
      users.map((user: any) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSuccessMessage("User updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {successMessage && <SuccessMessage message={successMessage} />}
          <Routes>
            <Route path="/" element={<UserList users={users} updateUser={updateUser} />} />
            <Route path="/add-user" element={<UserForm addUser={addUser} />} />
            <Route
              path="/manage-users"
              element={<UserList users={users} updateUser={updateUser} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
