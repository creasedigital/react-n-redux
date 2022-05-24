import { useState } from "react";

const UpdateTodo = ({ setTodos, todos }) => {
	const [todoInfo, setTodoInfo] = useState({ name: "", desc: "" });

	const handleChange = (e) => {
		setTodoInfo({ ...todoInfo, [e.target.id]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				id: Date.now(),
				name: todoInfo.name,
				desc: todoInfo.desc,
				activityStatus: false,
			},
		]);
		setTodoInfo({ name: "", desc: "" });
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="text-center mt-4">
				<div>
					<label htmlFor="name">Task</label>
					<input
						type="text"
						id="name"
						value={todoInfo.name}
						onChange={handleChange}
						className="bg-cyan-100 px-20 py-4 "
					/>
				</div>
				<div>
					<label htmlFor="desc">Task</label>
					<input
						type="text"
						id="desc"
						value={todoInfo.desc}
						onChange={handleChange}
					/>
				</div>
				<button>ADD TODO</button>
			</form>
		</div>
	);
};
export default UpdateTodo;
