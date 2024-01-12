// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import PostList from './components/PostList';
import UserList from './components/UserList';
import CommentList from './components/CommentList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Ticketing system</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comments">Comments</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/albums">Albums</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/photos">Photos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todos">ToDos</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<HomePage />} />
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
