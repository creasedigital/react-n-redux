import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import UpdateTodo from "./components/UpdateTodo";

function App() {
	const [todos, setTodos] = useState([
		{
			id: Date.now(),
			todoName: "",
			desc: "",
			activityStatus: false,
		},
	]);

	const handleSubmit = () => {};

	const addTodo = () => {
		console.log("added");
		// setTodos(...todos, id, todoName, desc, activityStatus);
	};

	const removeTodo = (id) => {
		console.log("removed", id);
		const todos = todos.filter((todo) => todo.id !== id);
		setTodos(todos);
	};

	return (
		<div>
			<h1>TODO APP</h1>
			<UpdateTodo
				todos={todos}
				setTodos={setTodos}
				addTodo={addTodo}
				removeTodo={removeTodo}
			/>
			<TodoContainer todos={todos} removeTodo={removeTodo} />
		</div>
	);
}

export default App;
