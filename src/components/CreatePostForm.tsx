// components/CreatePostForm.tsx
import React, { useState } from 'react';
import { createPost } from '../services/PostService';
import { Post } from '../models/Post';
import { Photo } from '../models/Photo';

interface CreatePostFormProps {
  onPostCreated: () => void;
  photos: Photo[];
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
    <div className="container my-3">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">Body</label>
          <textarea
            className="form-control"
            id="postBody"
            value={post.body}
            onChange={e => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postPhoto" className="form-label">Photo</label>
          <select
            className="form-select"
            id="postPhoto"
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
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
