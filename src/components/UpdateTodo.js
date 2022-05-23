// import {useState}

const UpdateTodo = ({ setTodos, addTodo, todos }) => {
	const handleChange = (e) => setTodos(e.target.value);

	return (
		<div>
			<form>
				<input
					type="text"
					id="name"
					// value={todos.todoName}
					onChange={handleChange}
				/>
				<input
					type="text"
					id="desc"
					// value={todos.desc}
					onChange={handleChange}
				/>
				<button onClick={addTodo}>ADD TODO</button>
			</form>
		</div>
	);
};
export default UpdateTodo;
