import React, { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <input
      type='text'
      placeholder='What needs to be done?'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyUp={handleInput}
    />
  );
}
