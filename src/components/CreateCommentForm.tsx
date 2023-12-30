// components/CreateCommentForm.tsx
import React, { useState } from 'react';
import { createComment } from '../services/CommentService';
import { Comment } from '../models/Comment';

interface CreateCommentFormProps {
  onCommentCreated: () => void;
}

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({ onCommentCreated }) => {
  const [comment, setComment] = useState<Comment>({ id: 0, postId: 1, name: '', email: '', body: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createComment(comment);
    onCommentCreated();
    setComment({ id: 0, postId: 1, name: '', email: '', body: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={comment.name}
          onChange={e => setComment({ ...comment, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={comment.email}
          onChange={e => setComment({ ...comment, email: e.target.value })}
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={comment.body}
          onChange={e => setComment({ ...comment, body: e.target.value })}
        />
      </div>
      <button type="submit">Create Comment</button>
    </form>
  );
};

export default CreateCommentForm;
