const TodoItem = ({ todos, removeTodo }) => {
	console.log(todos);
	const todoList = todos.length ? (
		todos.map((todo) => (
			<div key={todo.id}>
				<h3>{todo.name}</h3>
				<p>{todo.desc}</p>
				<div>
					<input
						type="checkbox"
						onChange={!todo.activityStatus}
						checked={todo.activityStatus}
					/>
					<span>Status: {todo.activityStatus ? "Done" : "Pending"}</span>
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
