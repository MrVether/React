// components/PhotoList.tsx
import React, { useEffect, useState } from 'react';
import { Photo } from '../models/Photo';
import { fetchPhotos, deletePhoto } from '../services/PhotoService';
import CreatePhotoForm from './CreatePhotoForm';

const PhotoList: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    const newPhotos = await fetchPhotos();
    setPhotos(newPhotos);
  };

  const handleDelete = async (id: number) => {
    await deletePhoto(id);
    loadPhotos();
  };

  return (
    <div>
      <h1>Photos</h1>
      <CreatePhotoForm onPhotoCreated={loadPhotos} />
      {photos.map(photo => (
        <div key={photo.id}>
          <p>{photo.title}</p>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <button onClick={() => handleDelete(photo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
