import TodoItem from "./TodoItem";

const todoContainer = ({ todos, removeTodo }) => {
	return (
		<div>
			<TodoItem todos={todos} removeTodo={removeTodo} />
		</div>
	);
};
export default todoContainer;
