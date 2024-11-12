// interface User {
//   profilePhoto: string;
//   name: string;
//   email: string;
//   role: string;
//   status: string;
// }

// interface UserCardProps {
//   user: User;
//   onClick: () => void;
// }

// export default function UserCard({ user, onClick }: UserCardProps) {
//   return (
//     <div
//       className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
//       onClick={onClick}
//     >
//       <img
//         src={user.profilePhoto}
//         alt={user.name}
//         className="w-24 h-24 rounded-full mx-auto mb-4"
//       />
//       <h2 className="text-xl font-semibold text-center">{user.name}</h2>
//       <p className="text-gray-600 text-center">{user.email}</p>
//       <div className="mt-4 flex justify-between items-center">
//         <span
//           className={`px-2 py-1 rounded-full text-sm ${
//             user.role === "Admin"
//               ? "bg-purple-200 text-purple-800"
//               : "bg-blue-200 text-blue-800"
//           }`}
//         >
//           {user.role}
//         </span>
//         <span
//           className={`px-2 py-1 rounded-full text-sm ${
//             user.status === "Active"
//               ? "bg-green-200 text-green-800"
//               : "bg-red-200 text-red-800"
//           }`}
//         >
//           {user.status}
//         </span>
//       </div>
//     </div>
//   );
// }


interface User {
  profilePhoto: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserCardProps {
  user: User;
  onClick: () => void;
}


export default function UserCard({ user, onClick }: UserCardProps) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={user.profilePhoto}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-center">{user.name}</h2>
      <p className="text-gray-600 text-center">{user.email}</p>
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            user.role === "Admin"
              ? "bg-purple-200 text-purple-800"
              : "bg-blue-200 text-blue-800"
          }`}
        >
          {user.role}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            user.status === "Active"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {user.status}
        </span>
      </div>
    </div>
  );
}