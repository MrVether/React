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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={photo.title}
          onChange={e => setPhoto({ ...photo, title: e.target.value })}
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="text"
          value={photo.url}
          onChange={e => setPhoto({ ...photo, url: e.target.value })}
        />
      </div>
      <div>
        <label>Thumbnail URL:</label>
        <input
          type="text"
          value={photo.thumbnailUrl}
          onChange={e => setPhoto({ ...photo, thumbnailUrl: e.target.value })}
        />
      </div>
      <button type="submit">Create Photo</button>
    </form>
  );
};

export default CreatePhotoForm;
