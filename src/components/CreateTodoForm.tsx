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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={todo.title}
          onChange={e => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default CreateTodoForm;
