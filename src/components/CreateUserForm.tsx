// components/CreateUserForm.tsx
import React, { useState } from 'react';
import { createUser } from '../services/UserService';
import { User } from '../models/User';

interface CreateUserFormProps {
  onUserCreated: () => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onUserCreated }) => {
  const [user, setUser] = useState<User>({ id: 0, name: '', username: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(user);
    onUserCreated();
    setUser({ id: 0, name: '', username: '', email: '' }); // Reset form
  };

  return (
    <div className="container my-3">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userUsername" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="userUsername"
            value={user.username}
            onChange={e => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
