// services/PhotoService.ts
import axios from 'axios';
import { Photo } from '../models/Photo';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const fetchPhotos = async (): Promise<Photo[]> => {
  const response = await axios.get<Photo[]>(API_URL);
  return response.data;
};

export const createPhoto = async (photo: Photo): Promise<Photo> => {
  const response = await axios.post<Photo>(API_URL, photo);
  return response.data;
};

export const deletePhoto = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
