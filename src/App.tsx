// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList';
import UserList from './components/UserList';
import CommentList from './components/CommentList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <Router> 
      <div>
        <nav>
          <ul>
            <li><Link to="/posts">Posty</Link></li>
            <li><Link to="/users">Użytkownicy</Link></li>
            <li><Link to="/comments">Komentarze</Link></li>
            <li><Link to="/albums">Albumy</Link></li>
            <li><Link to="/photos">Zdjęcia</Link></li>
            <li><Link to="/todos">Zadania</Link></li>
          </ul>
        </nav>

        <Routes>
               <Route path="/posts" element={<PostList />} />
               <Route path="/users" element={<UserList />} />
               <Route path="/comments" element={<CommentList />} />
               <Route path="/albums" element={<AlbumList />} />
               <Route path="/photos" element={<PhotoList />} />
               <Route path="/todos" element={<TodoList />} />
</Routes>

      </div>
    </Router>
  );
};

export default App;
