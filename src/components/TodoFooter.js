const filterButtons = ["all", "active", "completed"];

function TodoFooter({ todos, setTodos, filter, setFilter }) {
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  if (!todos.length) return null;

  return (
    <div className='card-footer'>
      <div>{todos.filter((todo) => !todo.completed).length} items left</div>
      <div>
        {filterButtons.map((button, index) => (
          <button
            key={index}
            className={button === filter ? "active" : ""}
            onClick={() => setFilter(button)}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </button>
        ))}
      </div>
      {hasCompletedTodos && (
        <button onClick={handleClearCompleted}>Clear Completed</button>
      )}
    </div>
  );
}

export default TodoFooter;
