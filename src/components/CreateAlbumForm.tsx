// components/CreateAlbumForm.tsx
import React, { useState } from 'react';
import { createAlbum } from '../services/AlbumService';
import { Album } from '../models/Album';

interface CreateAlbumFormProps {
  onAlbumCreated: () => void;
}

const CreateAlbumForm: React.FC<CreateAlbumFormProps> = ({ onAlbumCreated }) => {
  const [album, setAlbum] = useState<Album>({ id: 0, userId: 1, title: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createAlbum(album);
    onAlbumCreated();
    setAlbum({ id: 0, userId: 1, title: '' }); // Reset form
  };

  return (
    <div className="container my-3">
      <h2>Create New Album</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="albumTitle" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="albumTitle"
            value={album.title}
            onChange={e => setAlbum({ ...album, title: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Album</button>
      </form>
    </div>
  );
};

export default CreateAlbumForm;
