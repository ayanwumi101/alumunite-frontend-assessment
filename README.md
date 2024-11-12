# User Management Dashboard

A React-based user management dashboard application that allows you to manage user profiles effectively. This application provides functionality to view, add, and edit user profiles with features like role management and status tracking.

## Features

- 👥 View list of user profiles
- ➕ Add new users with detailed information
- ✏️ Edit existing user profiles
- 📸 Profile photo upload support
- 🔄 Real-time status updates
- 💾 Local storage persistence
- 📱 Responsive design for all devices

## Technologies Used

- Vite - React 18
- React Router v6
- Tailwind CSS
- LocalStorage for data persistence
- TypeScript

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ayanwumi101/alumunite-frontend-assessment.git
   ```

2. Navigate to the project directory
   ```bash
   cd alumunite-frontend-assessment
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
user-management-dashboard/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── UserCard.tsx
│   │   ├── UserForm.tsx
│   │   ├── UserList.tsx
│   │   ├── UserEditModal.tsx
│   │   └── SuccessMessage.tsx
│   ├── data/
│   │   └── mockUsers.json
│   ├── utils/
│   │   └── validation.ts
│   └── App.tsx
├── public/
└── package.json
```

## Usage

### Viewing Users
- Navigate to the home page to view all user profiles
- Each user card displays the user's name, email, role, status, and profile photo

### Adding a New User
1. Click on "Add User" in the navigation bar
2. Fill in the required information:
   - Name
   - Email
   - Role (Admin/User)
   - Status (Active/Inactive)
   - Profile Photo (JPG/PNG)
3. Click "Add User" to save

### Editing a User
1. Go to "Manage Users"
2. Click on any user card to open the edit modal
3. Modify the desired information
4. Click "Update User" to save changes

## Data Persistence

The application uses localStorage to persist user data. All changes (adding/editing users) are automatically saved and will be available even after refreshing the page.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
