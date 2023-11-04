import { useState } from "react";

function TodoList({ todos, setTodos, filter }) {
  const [isEdit, setIsEdit] = useState(Array(todos.length).fill(false));

  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditChange = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const handleEditClick = (index) => {
    const newIsEdit = Array(todos.length).fill(false);
    newIsEdit[index] = !newIsEdit[index];
    setIsEdit(newIsEdit);
  };

  const handleEditBlur = (index) => {
    const newIsEdit = [...isEdit];
    newIsEdit[index] = false;
    setIsEdit(newIsEdit);
  };

  function todoFilter(todo, filter) {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  }

  return (
    <ul>
      {todos
        .filter((todo) => todoFilter(todo, filter))
        .map((todo, index) => (
          <li key={index}>
            <div>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleCheckbox(index)}
              />
              <input
                type='text'
                value={todo.text}
                readOnly={!isEdit[index]}
                onChange={(e) => handleEditChange(index, e.target.value)}
                onClick={() => handleEditClick(index)}
                onBlur={() => handleEditBlur(index)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              />
            </div>
            <span onClick={() => handleDelete(index)}>🗙</span>
          </li>
        ))}
    </ul>
  );
}

export default TodoList;
