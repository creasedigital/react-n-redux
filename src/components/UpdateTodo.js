const UpdateTodo = ({ setTodos, addTodo, todos }) => {
	return (
		<div>
			<input
				type="text"
				id="name"
				// value={todos.todoName}
				onChange={console.log("value")}
			/>
			<input
				type="text"
				id="desc"
				// value={todos.desc}
				onChange={console.log("value")}
			/>
			<button onClick={addTodo}>ADD TODO</button>
		</div>
	);
};
export default UpdateTodo;
