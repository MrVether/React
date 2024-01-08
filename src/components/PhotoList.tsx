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
    loadPhotos(); // Odśwież listę zdjęć
  };

  return (
    <div className="container my-3">
      <h1>Photos</h1>
      <CreatePhotoForm onPhotoCreated={loadPhotos} />
      <div className="row">
        {photos.map(photo => (
          <div key={photo.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <button onClick={() => handleDelete(photo.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
