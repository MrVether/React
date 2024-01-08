// components/CreatePhotoForm.tsx
import React, { useState } from 'react';
import { createPhoto } from '../services/PhotoService';
import { Photo } from '../models/Photo';

interface CreatePhotoFormProps {
  onPhotoCreated: () => void;
}

const CreatePhotoForm: React.FC<CreatePhotoFormProps> = ({ onPhotoCreated }) => {
  const [photo, setPhoto] = useState<Photo>({ id: 0, albumId: 1, title: '', url: '', thumbnailUrl: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPhoto(photo);
    onPhotoCreated();
    setPhoto({ id: 0, albumId: 1, title: '', url: '', thumbnailUrl: '' }); // Reset form
  };

  return (
    <div className="container my-3">
      <h2>Create New Photo</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="photoTitle" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="photoTitle"
            value={photo.title}
            onChange={e => setPhoto({ ...photo, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photoUrl" className="form-label">URL:</label>
          <input
            type="text"
            className="form-control"
            id="photoUrl"
            value={photo.url}
            onChange={e => setPhoto({ ...photo, url: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnailUrl" className="form-label">Thumbnail URL:</label>
          <input
            type="text"
            className="form-control"
            id="thumbnailUrl"
            value={photo.thumbnailUrl}
            onChange={e => setPhoto({ ...photo, thumbnailUrl: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Photo</button>
      </form>
    </div>
  );
};

export default CreatePhotoForm;
