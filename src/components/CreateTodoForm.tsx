// components/CreateTodoForm.tsx
import React, { useState } from 'react';
import { createTodo } from '../services/TodoService';
import { Todo } from '../models/Todo';

interface CreateTodoFormProps {
  onTodoCreated: () => void;
}

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ onTodoCreated }) => {
  const [todo, setTodo] = useState<Todo>({ id: 0, userId: 1, title: '', completed: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTodo(todo);
    onTodoCreated();
    setTodo({ id: 0, userId: 1, title: '', completed: false }); // Reset form
  };

  return (
    <div className="container my-3">
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            value={todo.title}
            onChange={e => setTodo({ ...todo, title: e.target.value })}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="todoCompleted"
            checked={todo.completed}
            onChange={e => setTodo({ ...todo, completed: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="todoCompleted">Completed</label>
        </div>
        <button type="submit" className="btn btn-primary">Create Todo</button>
      </form>
    </div>
  );
};

export default CreateTodoForm;
