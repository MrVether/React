// services/UserService.ts
import axios from 'axios';
import { User } from '../models/User';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};

// services/UserService.ts
export const createUser = async (user: User): Promise<User> => {
  const response = await axios.post<User>(`${API_URL}`, user);
  console.log('Created User:', response.data);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await axios.delete(`${API_URL}/${id}`);
  console.log('Deleted User Response:', response.data);
};

