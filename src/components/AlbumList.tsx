// components/AlbumList.tsx
import React, { useEffect, useState } from 'react';
import { Album } from '../models/Album';
import { fetchAlbums, deleteAlbum } from '../services/AlbumService';
import CreateAlbumForm from './CreateAlbumForm';

const AlbumList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    const newAlbums = await fetchAlbums();
    setAlbums(newAlbums);
  };

  const handleDelete = async (id: number) => {
    await deleteAlbum(id);
    loadAlbums();
  };

  return (
    <div>
      <h1>Albums</h1>
      <CreateAlbumForm onAlbumCreated={loadAlbums} />
      {albums.map(album => (
        <div key={album.id}>
          <p>{album.title}</p>
          <button onClick={() => handleDelete(album.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
