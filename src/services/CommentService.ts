// services/CommentService.ts
import axios from 'axios';
import { Comment } from '../models/Comment';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await axios.get<Comment[]>(API_URL);
  return response.data;
};

// services/CommentService.ts
export const createComment = async (comment: Comment): Promise<Comment> => {
  const response = await axios.post<Comment>(`${API_URL}`, comment);
  console.log('Created Comment:', response.data);
  return response.data;
};

export const deleteComment = async (id: number): Promise<void> => {
  const response = await axios.delete(`${API_URL}/${id}`);
  console.log('Deleted Comment Response:', response.data);
};

