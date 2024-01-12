// components/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/PostService';
import { fetchPhotos } from '../services/PhotoService';
import { fetchAlbums } from '../services/AlbumService';
import { fetchTodos } from '../services/TodoService';
import { fetchUsers } from '../services/UserService';
import CreateCommentForm from './CreateCommentForm';

import { Post } from '../models/Post';
import { Photo } from '../models/Photo';
import { Album } from '../models/Album';
import { Todo } from '../models/Todo';
import { User } from '../models/User';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const postsData = await fetchPosts();
      const photosData = await fetchPhotos();
      const albumsData = await fetchAlbums();
      const todosData = await fetchTodos();
      const usersData = await fetchUsers();
      setPosts(postsData.slice(0, 2)); // Pobierz tylko dwa posty
      setPhotos(photosData);
      setAlbums(albumsData);
      setTodos(todosData.slice(0, 1)); // Pobierz tylko jedno zadanie
      setUsers(usersData);
    };
    loadData();
  }, []);

  const findPhotoByPostId = (postId: number) => {
    return photos.find(photo => photo.albumId === postId);
  };

  const findAlbumByPhotoId = (photoId: number) => {
    return albums.find(album => album.id === photoId);
  };

  const findUserByPostId = (userId: number) => {
    return users.find(user => user.id === userId);
  };
  const getRandomUser = () => {
    if (users.length > 0) {
      return users[Math.floor(Math.random() * users.length)];
    }
    return null; // Zwróć null, jeśli lista użytkowników jest pusta
  };

  return (
    <div className="container my-3">
      {posts.map(post => {
        const photo = findPhotoByPostId(post.id);
        const album = photo ? findAlbumByPhotoId(photo.id) : null;
        const randomUser = getRandomUser(); // Pobierz losowego użytkownika
        return (
          <div key={post.id} className="card my-2">
            <div className="card-body">
              <h1 className="card-title">Incident: {post.title}</h1>
            <br/>
              <p className="card-text"><h3>Issue description: </h3>{post.body}</p>
              {album && <p className="card-text"><h3>Issue category:</h3> {album.title}</p>}
              {randomUser && <p className="card-text"><h3>Author:</h3> {randomUser.name}</p>}
              <h3>Screenshot attached: </h3>
              {photo && <img src={photo.thumbnailUrl} alt={post.title} className="img-fluid" style={{ maxWidth: '200px' }} />}
              <h3>Familiar ticket: </h3>
      {todos.map(todo => (
        <p key={todo.id}>{todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}</p>
      ))}
              <CreateCommentForm onCommentCreated={() => {}} />
            </div>
          </div>
        );
      })}
     
    </div>
  );
};

export default HomePage;
