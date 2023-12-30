// services/UserService.ts
import axios from 'axios';
import { User } from '../models/User';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};

export const createUser = async (user: User): Promise<User> => {
  const response = await axios.post<User>(API_URL, user);
  return response.data;
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await axios.put<User>(`${API_URL}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
