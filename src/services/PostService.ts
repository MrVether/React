import axios from 'axios';
import { Post } from '../models/Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
 

  const response = await axios.get<Post[]>(API_URL);

  return response.data;

};

export const createPost = async (post: Post): Promise<Post> => {
  try {
    const response = await axios.post<Post>(`${API_URL}`, post);
    console.log('Created Post:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// services/PostService.ts
export const deletePost = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}${id}`);
    console.log('Deleted Post Response:', response.data);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};


export {};
