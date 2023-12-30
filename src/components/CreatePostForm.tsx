// components/CreatePostForm.tsx
import React, { useState } from 'react';
import { createPost } from '../services/PostService';
import { Post } from '../models/Post';
import { Photo } from '../models/Photo'; // Zaimportuj model Photo

interface CreatePostFormProps {
  onPostCreated: () => void;
  photos: Photo[]; // Lista zdjęć jako prop
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onPostCreated, photos }) => {
  const [post, setPost] = useState<Post>({ id: 0, title: '', body: '', photoId: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(post);
    onPostCreated();
    setPost({ id: 0, title: '', body: '', photoId: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
        />
      </div>
      <div>
        <label>Photo:</label>
        <select
          value={post.photoId}
          onChange={e => setPost({ ...post, photoId: parseInt(e.target.value, 10) })}
        >
          {photos.map(photo => (
            <option key={photo.id} value={photo.id}>
              {photo.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
