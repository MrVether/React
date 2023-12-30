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
    <div>
      <h1>Comments</h1>
      <CreateCommentForm onCommentCreated={loadComments} />
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.body}</p>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
