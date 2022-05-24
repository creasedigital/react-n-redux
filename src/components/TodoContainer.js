import TodoItem from "./TodoItem";

const todoContainer = ({ todos, removeTodo, setTodos }) => {
	return (
		<div className="mx-4 m-auto border-t dark:border-cyan-800 ">
			<TodoItem todos={todos} removeTodo={removeTodo} setTodos={setTodos} />
		</div>
	);
};
export default todoContainer;
