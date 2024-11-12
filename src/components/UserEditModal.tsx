// import { useState } from "react";
// import { validateEmail } from "../utils/validation";

// interface User {
//   name: string;
//   email: string;
//   role: string;
//   status: string;
//   profilePhoto?: string;
// }

// interface UserEditModalProps {
//   user: User;
//   onClose: () => void;
//   onUpdate: (user: User) => void;
// }

// export default function UserEditModal({ user, onClose, onUpdate }: UserEditModalProps) {
//   const [name, setName] = useState(user.name);
//   const [email, setEmail] = useState(user.email);
//   const [role, setRole] = useState(user.role);
//   const [status, setStatus] = useState(user.status);
//   const [error, setError] = useState("");

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     if (!name || !email || !validateEmail(email)) {
//       setError("Please fill in all fields correctly.");
//       return;
//     }
//     const updatedUser = {
//       ...user,
//       name,
//       email,
//       role,
//       status,
//     };
//     onUpdate(updatedUser);
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
//       id="my-modal"
//     >
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <div className="mt-3 text-center">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">
//             Edit User
//           </h3>
//           <form onSubmit={handleSubmit} className="mt-2">
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                 htmlFor="role"
//               >
//                 Role
//               </label>
//               <select
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//               >
//                 <option value="User">User</option>
//                 <option value="Admin">Admin</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                 htmlFor="status"
//               >
//                 Status
//               </label>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="status"
//                   checked={status === "Active"}
//                   onChange={(e) =>
//                     setStatus(e.target.checked ? "Active" : "Inactive")
//                   }
//                   className="mr-2 w-[15px] h-[15px]"
//                 />
//                 <span>{status}</span>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Update User
//               </button>
//               <button
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//                 onClick={onClose}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
  profilePhoto?: string;
}


interface UserEditModalProps {
  user: User;
  onClose: () => void;
  onUpdate: (user: User) => void;
}


import { useState } from "react";
import { validateEmail } from "../utils/validation";

export default function UserEditModal({ user, onClose, onUpdate }: UserEditModalProps) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [status, setStatus] = useState(user.status);
  const [profilePhoto, setProfilePhoto] = useState(user?.profilePhoto);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !email || !validateEmail(email)) {
      setError("Please fill in all fields correctly.");
      return;
    }
    const updatedUser = {
      ...user,
      name,
      email,
      role,
      status,
      profilePhoto,
    };
    onUpdate(updatedUser);
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
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Edit User
          </h3>
          <form onSubmit={handleSubmit} className="mt-2">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
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
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
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
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
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
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
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
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
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
                  className="w-24 h-24 object-cover rounded-full mx-auto"
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update User
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
