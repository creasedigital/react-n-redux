import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import UpdateTodo from "./components/UpdateTodo";

function App() {
	const [todos, setTodos] = useState([]);

	const removeTodo = (id) => {
		setTodos((initialTodos) => initialTodos.filter((todo) => todo.id !== id));
	};

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
