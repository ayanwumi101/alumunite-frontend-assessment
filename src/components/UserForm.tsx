// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { validateEmail } from '../utils/validation'

// interface UserFormProps {
//   addUser: (user: { id: number; name: string; email: string; role: string; status: string; profilePhoto: string }) => void;
// }

// export default function UserForm({ addUser }: UserFormProps) {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [role, setRole] = useState('User')
//   const [status, setStatus] = useState('Active')
//   const [profilePhoto, setProfilePhoto] = useState(null)
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     if (!name || !email || !validateEmail(email)) {
//       setError('Please fill in all fields correctly.')
//       return
//     }
//     if (!profilePhoto) {
//       setError('Please upload a profile photo.')
//       return
//     }
//     const newUser = {
//       id: Date.now(),
//       name,
//       email,
//       role,
//       status,
//       profilePhoto: URL.createObjectURL(profilePhoto)
//     }
//     addUser(newUser)
//     navigate('/')
//   }

//   const handleFileChange = (e: any) => {
//     const file = e.target.files[0]
//     if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
//       setProfilePhoto(file)
//       setError('')
//     } else {
//       setError('Please upload a valid JPG or PNG image.')
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Add New User</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//           Name
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="name"
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
//           Role
//         </label>
//         <select
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="User">User</option>
//           <option value="Admin">Admin</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
//           Status
//         </label>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             id="status"
//             checked={status === 'Active'}
//             onChange={(e) => setStatus(e.target.checked ? 'Active' : 'Inactive')}
//             className="mr-2"
//           />
//           <span>{status}</span>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePhoto">
//           Profile Photo
//         </label>
//         <input
//           type="file"
//           id="profilePhoto"
//           accept=".jpg,.jpeg,.png"
//           onChange={handleFileChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Add User
//         </button>
//       </div>
//     </form>
//   )
// }

interface UserFormProps {
  addUser: (user: { id: number; name: string; email: string; role: string; status: string; profilePhoto: string }) => void;
}


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/validation";

export default function UserForm({ addUser }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Active");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !email || !validateEmail(email)) {
      setError("Please fill in all fields correctly.");
      return;
    }
    if (!profilePhoto) {
      setError("Please upload a profile photo.");
      return;
    }
    const newUser = {
      id: Date.now(),
      name,
      email,
      role,
      status,
      profilePhoto,
    };
    addUser(newUser);
    navigate("/");
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError("");
    } else {
      setError("Please upload a valid JPG or PNG image.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Role
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="status"
        >
          Status
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="status"
            checked={status === "Active"}
            onChange={(e) =>
              setStatus(e.target.checked ? "Active" : "Inactive")
            }
            className="mr-2"
          />
          <span>{status}</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="profilePhoto"
        >
          Profile Photo
        </label>
        <input
          type="file"
          id="profilePhoto"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {profilePhoto && (
        <div className="mb-4">
          <img
            src={profilePhoto}
            alt="Profile Preview"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add User
        </button>
      </div>
    </form>
  );
}