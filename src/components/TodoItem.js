const TodoItem = ({ todos, removeTodo, setTodos }) => {
	const handleCheck = (e, id) => {
		setTodos((initialTodo) =>
			initialTodo.map((todo) => {
				if (todo.id === id) {
					return { ...todo, activityStatus: e.target.checked };
				}
				return todo;
			}),
		);
	};

	const todoList = todos.length ? (
		todos.map((todo) => (
			<div
				className="border rounded-lg mb-4 p-2 dark:bg-slate-800 bg-slate-200"
				key={todo.id}
			>
				{todo.name && <h3 className={`font-bold text-lg `}>{todo.name}</h3>}
				{todo.desc && <p className="italic my-1 p-4 ">{todo.desc}</p>}
				<div className="flex justify-between items-center px-4">
					<div>
						<input
							type="checkbox"
							onChange={(e) => handleCheck(e, todo.id)}
							checked={todo.activity}
						/>
						<span>Status: {todo.activityStatus ? "Done" : "Pending"}</span>
					</div>
					<button
						className="text-center rounded-md bg-cyan-900 text-white px-4 py-1"
						onClick={() => removeTodo(todo.id)}
					>
						Remove
					</button>
				</div>
			</div>
		))
	) : (
		<p className="pt-4">Nothing's Here!</p>
	);

	return <div className="pt-4">{todoList}</div>;
};

export default TodoItem;
