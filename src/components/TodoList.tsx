// components/TodoList.tsx
import React, { useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import { fetchTodos, deleteTodo } from '../services/TodoService';
import CreateTodoForm from './CreateTodoForm';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const newTodos = await fetchTodos();
    setTodos(newTodos);
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="container my-3">
      <h1>Todos</h1>
      <CreateTodoForm onTodoCreated={loadTodos} />
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="d-flex align-items-center">
              {todo.completed ? 
                <i className="fas fa-check-circle text-success mr-3" style={{ fontSize: '1.2em' }}></i> : 
                <i className="fas fa-times-circle text-danger mr-3" style={{ fontSize: '1.2em' }}></i>
              }
              <span>{todo.title}</span>
            </span>
            <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
