// components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/PostService';
import { fetchPhotos } from '../services/PhotoService';
import { Post } from '../models/Post';
import { Photo } from '../models/Photo';
import CreatePostForm from './CreatePostForm';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchData = async () => {
    const newPosts = await fetchPosts();
    const newPhotos = await fetchPhotos();
    setPosts(newPosts);
    setPhotos(newPhotos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    fetchData();
  };

  const findPhotoUrlById = (photoId: number) => {
    const photo = photos.find(p => p.id === photoId);
    return photo ? photo.url : '';
  };

  return (
    <div className="container my-3">
      <h1>Posts</h1>
      <CreatePostForm onPostCreated={fetchData} photos={photos} />
      {posts.map(post => (
        <div key={post.id} className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            {post.photoId && <img src={findPhotoUrlById(post.photoId)} alt={post.title} className="img-fluid" />}
            <button onClick={() => handleDelete(post.id)} className="btn btn-danger mt-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
