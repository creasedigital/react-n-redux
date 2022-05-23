import TodoItem from "./TodoItem";

const todoContainer = ({ todos, removeTodo, setTodos }) => {
	return (
		<div>
			<TodoItem todos={todos} removeTodo={removeTodo} setTodos={setTodos} />
		</div>
	);
};
export default todoContainer;
