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
		<div className="w-screen min-h-screen bg-white dark:bg-slate-900 text-cyan-900  dark:text-slate-100">
			<div className="text-5xl font-light mb-2 py-5 text-cyan-900  dark:text-slate-100 text-center">
				<span className="text-5xl font-bold mb-2 mr-1 py-5 text-cyan-600  dark:text-cyan-400 text-center">
					&#10003;
				</span>
				TODO
			</div>
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
