// services/TodoService.ts
import axios from 'axios';
import { Todo } from '../models/Todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(API_URL);
  return response.data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  try {
  const response = await axios.post<Todo>(API_URL, todo);
  console.log('Created Todo:', response.data);
  return response.data;
} catch (error) {
  console.error('Error creating todo:', error);
  throw error;
}
};

export const deleteTodo = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log('Deleted Todo Response:', response.data);
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

