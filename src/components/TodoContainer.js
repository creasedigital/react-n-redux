import TodoItem from "./TodoItem";

const todoContainer = ({ todos, removeTodo, setTodos }) => {
	return (
		<div className="px-6 py-4 border-t border-cyan-200">
			<TodoItem todos={todos} removeTodo={removeTodo} setTodos={setTodos} />
		</div>
	);
};
export default todoContainer;
