import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <div className='card'>
        <div>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} filter={filter} />
        </div>
        <TodoFooter todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}

export default App;