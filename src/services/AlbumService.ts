// services/AlbumService.ts
import axios from 'axios';
import { Album } from '../models/Album';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const fetchAlbums = async (): Promise<Album[]> => {
  const response = await axios.get<Album[]>(API_URL);
  return response.data;
};

export const createAlbum = async (album: Album): Promise<Album> => {
  const response = await axios.post<Album>(API_URL, album);
  return response.data;
};

export const deleteAlbum = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
