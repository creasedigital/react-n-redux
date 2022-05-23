import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import UpdateTodo from "./components/UpdateTodo";

function App() {
	const [todos, setTodos] = useState([]);

	const removeTodo = (id) => {
		setTodos((initialTodos) => initialTodos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<h1>TODO APP</h1>
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
