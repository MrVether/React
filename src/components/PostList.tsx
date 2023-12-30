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
    fetchData(); // Użyj funkcji fetchData do odświeżenia listy
  };

  const findPhotoUrlById = (photoId: number) => {
    const photo = photos.find(p => p.id === photoId);
    return photo ? photo.url : '';
  };

  return (
    <div>
      <h1>Posts</h1>
      <CreatePostForm onPostCreated={fetchData} photos={photos} />
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {post.photoId && <img src={findPhotoUrlById(post.photoId)} alt={post.title} />}
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
