// components/CreatePostForm.tsx
import React, { useState } from 'react';
import { createPost } from '../services/PostService';
import { Post } from '../models/Post';

interface CreatePostFormProps {
  onPostCreated: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onPostCreated }) => {
  const [post, setPost] = useState<Post>({ id: 0, title: '', body: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(post);
    onPostCreated();
    setPost({ id: 0, title: '', body: '' });
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
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
