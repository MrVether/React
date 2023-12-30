import axios from 'axios';
import { Post } from '../models/Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_URL);
  return response.data;
};

export const createPost = async (post: Post): Promise<Post> => {
  const response = await axios.post<Post>(API_URL, post);
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await axios.put<Post>(`${API_URL}/${post.id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export {};
