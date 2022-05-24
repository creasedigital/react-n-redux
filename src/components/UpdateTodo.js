import { useState } from "react";

const UpdateTodo = ({ setTodos, todos }) => {
	const [todoInfo, setTodoInfo] = useState({ name: "", desc: "" });

	const handleChange = (e) => {
		if (!e.target.value) return;
		setTodoInfo({ ...todoInfo, [e.target.id]: e.target.value });
	};
	const handleSubmit = (e) => {
		// if (!todoInfo.name || !todoInfo.desc) return;
		e.preventDefault();
		// console.log(todoInfo.name, todoInfo.desc);
		if (todoInfo.name.trim().length === 0 || todoInfo.desc.trim().length === 0)
			return;
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
			<form onSubmit={handleSubmit} className="text-center p-8 mt-4">
				<div className="mb-4  w-1/2 m-auto flex flex-col">
					<label
						htmlFor="name"
						className="text-cyan-900 dark:text-cyan-300 mb-2 font-bold  "
					>
						Enter A Task:
					</label>
					<input
						type="text"
						id="name"
						value={todoInfo.name}
						onChange={handleChange}
						className="bg-cyan-100 text-slate-900 py-4 focus:outline-none p-4"
					/>
				</div>
				<div className="mb-4  w-1/2 m-auto flex flex-col">
					<label
						htmlFor="desc"
						className="text-cyan-900 dark:text-cyan-300 mb-2 font-bold "
					>
						Description:
					</label>
					<input
						type="text"
						id="desc"
						value={todoInfo.desc}
						onChange={handleChange}
						className="bg-cyan-100 text-slate-900 py-4 focus:outline-none p-4"
					/>
				</div>
				<div className="mb-4 m-auto w1/2">
					<button
						disabled={todoInfo.name || todoInfo.desc ? false : true}
						className="text-center  rounded-lg bg-cyan-900 text-white px-8 md:px-12 lg:px-16 py-4 hover:bg-cyan-700 hover:text-gray-200"
					>
						ADD TODO
					</button>
				</div>
			</form>
		</div>
	);
};
export default UpdateTodo;
