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
				<div className="mb-4">
					<label htmlFor="name" className="text-cyan-900 mr-4 font-bold ">
						Enter A Task:
					</label>
					<input
						type="text"
						id="name"
						value={todoInfo.name}
						onChange={handleChange}
						className="bg-cyan-100 px-20 py-4"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="desc" className="text-cyan-900 mr-4 font-bold ">
						Description:
					</label>
					<input
						type="text"
						id="desc"
						value={todoInfo.desc}
						onChange={handleChange}
						className="bg-cyan-100 px-20 py-4"
					/>
				</div>
				<div className="mb-4 m-auto">
					<button className="text-left bg-cyan-900 text-lg text-white px-20 py-4">
						ADD TODO
					</button>
				</div>
			</form>
		</div>
	);
};
export default UpdateTodo;
