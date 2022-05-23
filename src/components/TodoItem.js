import { useState } from "react";

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

	console.log(todos);
	const todoList = todos.length ? (
		todos.map((todo) => (
			<div key={todo.id}>
				<h3>{todo.name}</h3>
				<p>{todo.desc}</p>
				<div>
					<input
						type="checkbox"
						onChange={(e) => handleCheck(e, todo.id)}
						checked={todo.activity}
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
