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

	const addTodo = () => {
		// setTodos(...todos, id, todoName, desc, activityStatus);
		console.log("added");
	};

	const removeTodo = (id) => {
		console.log("removed");
		{
			/*  setTodos(
   ) */
		}
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
