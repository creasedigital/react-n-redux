import TodoItem from "./TodoItem";

const todoContainer = ({ todos, removeTodo, setTodos }) => {
	return (
		<div className="mx-4 m-auto mb-4 pb-4 border-t dark:border-cyan-800 ">
			<TodoItem todos={todos} removeTodo={removeTodo} setTodos={setTodos} />
		</div>
	);
};
export default todoContainer;
