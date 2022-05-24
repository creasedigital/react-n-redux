import { useState, useEffect } from "react";
import TodoContainer from "./components/TodoContainer";
import UpdateTodo from "./components/UpdateTodo";

function App() {
	// const sessionData = sessionStorage.getItem("todos");
	// return sessionData ? JSON.parse(sessionData) : [];

	const [todos, setTodos] = useState(
		JSON.parse(sessionStorage.getItem("todos")) || [],
	);

	const removeTodo = (id) => {
		setTodos((initialTodos) => initialTodos.filter((todo) => todo.id !== id));
	};

	useEffect(() => {
		sessionStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="">
			<h1 className="text-5xl mb-2 bg-cyan-100 py-5 text-cyan-900 text-center">
				TODO APP
			</h1>
			<UpdateTodo todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
			<TodoContainer
				todos={todos}
				removeTodo={removeTodo}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;
