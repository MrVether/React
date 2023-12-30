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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
