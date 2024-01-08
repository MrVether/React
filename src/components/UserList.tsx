// UserList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from './CreateUserForm';
import { deleteUser } from '../services/UserService';

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
    loadUsers();
  };

  return (
    <div className="container my-3">
      <h1>Users</h1>
      <CreateUserForm onUserCreated={loadUsers} />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
            <th>Nazwa Użytkownika</th>
            <th>Email</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Usuń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
