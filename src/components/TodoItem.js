const TodoItem = ({ todos, removeTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo) => (
			<div key={todo.id}>
				<h3>{todo.todoName}</h3>
				<p>{todo.desc}</p>
				<div>
					<span>Status: {todo.activityStatus}</span>
					<button onClick={() => removeTodo(todo.id)}>Remove</button>
				</div>
			</div>
		))
	) : (
		<p>Nothing's Here!</p>
	);

	return <>{todoList}</>;
};

export default TodoItem;
