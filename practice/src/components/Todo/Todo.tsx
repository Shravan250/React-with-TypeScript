import React, { useState } from "react";

interface TodoProps {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (task: string) => {
    let complete = false;
    if (todos.length % 2 === 0) {
      complete = true;
    }
    const newTodo: TodoProps = {
      id: todos.length + 1,
      task,
      completed: complete,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1 className="text-2xl font-medium">Add Todo</h1>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>

      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? "text-green-800" : "text-gray-900"}
            >
              {todo.task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
