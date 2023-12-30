// UserList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from './CreateUserForm';
import { deleteUser } from '../services/UserService'; // Zaimportuj funkcję usuwania

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    loadUsers(); // Odśwież listę użytkowników
  };

  return (
    <div>
      <h1>Użytkownicy</h1>
      <CreateUserForm onUserCreated={loadUsers} />
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
