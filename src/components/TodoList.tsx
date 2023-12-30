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
    <div>
      <h1>Todos</h1>
      <CreateTodoForm onTodoCreated={loadTodos} />
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
