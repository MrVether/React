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
    <div className="container my-3">
      <h2>Create New Comment</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="commentName" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="commentName"
            value={comment.name}
            onChange={e => setComment({ ...comment, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="commentEmail" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="commentEmail"
            value={comment.email}
            onChange={e => setComment({ ...comment, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="commentBody" className="form-label">Body:</label>
          <textarea
            className="form-control"
            id="commentBody"
            value={comment.body}
            onChange={e => setComment({ ...comment, body: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Comment</button>
      </form>
    </div>
  );
};

export default CreateCommentForm;
