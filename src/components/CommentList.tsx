// components/CommentList.tsx
import React, { useEffect, useState } from 'react';
import { Comment } from '../models/Comment';
import { fetchComments, deleteComment } from '../services/CommentService';
import CreateCommentForm from './CreateCommentForm';

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const newComments = await fetchComments();
    setComments(newComments);
  };

  const handleDelete = async (id: number) => {
    await deleteComment(id);
    loadComments();
  };

  return (
    <div className="container my-3">
      <h1>Comments</h1>
      <CreateCommentForm onCommentCreated={loadComments} />
      {comments.map(comment => (
        <div key={comment.id} className="card my-2">
          <div className="card-body">
            <p className="card-text">{comment.body}</p>
            <button onClick={() => handleDelete(comment.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
