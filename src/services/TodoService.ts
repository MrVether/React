// services/TodoService.ts
import axios from 'axios';
import { Todo } from '../models/Todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(API_URL);
  return response.data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const response = await axios.post<Todo>(API_URL, todo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
